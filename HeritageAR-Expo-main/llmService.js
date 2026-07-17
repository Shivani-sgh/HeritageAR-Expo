import { OPENROUTER_API_KEY } from "./config";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";
  export const buildPrompt = (role, monumentName, baseInfo) => {
  if (role === "child") {
    return `Explain ${monumentName} like a fun story for kids. ${baseInfo}`;
  }

  if (role === "student") {
    return `
You are an AI Heritage Guide.

Answer ONLY the user's question.
Keep the answer between 50-80 words.
Use simple English.
Do not give extra history unless asked.

Monument: ${monumentName}

Question:
${baseInfo}
`;
  }

  if (role === "researcher") {
    return `Give deep academic explanation with architecture and history. ${baseInfo}`;
  }

  return `Explain ${monumentName} in simple tourist-friendly way. ${baseInfo}`;
};
export const askGemini = async (prompt) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b:free",
        messages: [
  {
    role: "system",
    content:
      "You are an AI Heritage Guide. Reply in simple English using only 50-80 words. Answer only the user's question. Do not add unnecessary details.",
  },
  {
    role: "user",
    content: prompt,
  },
],
      }),
    });

    const data = await response.json();

    console.log("OpenRouter Response:", data);

    return (
      data.choices?.[0]?.message?.content ||
      "No response received."
    );
  } catch (error) {
    console.log("OpenRouter Error:", error);
    return "Sorry, AI is currently unavailable.";
  }
};
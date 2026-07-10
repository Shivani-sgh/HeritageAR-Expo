export const buildPrompt = (role, monumentName, baseInfo) => {
  if (role === "child") {
    return `Explain ${monumentName} like a fun story for kids. ${baseInfo}`;
  }

  if (role === "student") {
    return `Explain ${monumentName} in educational detail with facts. ${baseInfo}`;
  }

  if (role === "researcher") {
    return `Give deep academic explanation with architecture and history. ${baseInfo}`;
  }

  return `Explain ${monumentName} in simple tourist-friendly way. ${baseInfo}`;
};
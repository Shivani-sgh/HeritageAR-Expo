import { askGemini, buildPrompt } from "../llmService";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AskAI({ monument, section }) {
  const [question, setQuestion] = useState("");
  const scrollViewRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: `Hi! Ask me anything about ${monument}.`,
    },
  ]);
  useEffect(() => {
  scrollViewRef.current?.scrollToEnd({ animated: true });
}, [messages]);

  const handleSend = async () => {
    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
  ...prev,
  {
    sender: "user",
    text: userQuestion,
  },
]);

setQuestion("");

const prompt = buildPrompt(
  "student",
  monument,
  `${section}: ${userQuestion}`
);
setIsTyping(true);
const aiReply = await askGemini(prompt);
setIsTyping(false);
console.log("AI Reply:", aiReply);


setMessages((prev) => [
  ...prev,
  {
    sender: "ai",
    text: aiReply,
  },
]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🤖 Ask AI</Text>

      <ScrollView
  ref={scrollViewRef}
  style={styles.chatContainer}
  nestedScrollEnabled={true}
  keyboardShouldPersistTaps="handled"
>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.sender === "user"
                ? styles.userMessage
                : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
        {isTyping && (
  <View style={[styles.message, styles.aiMessage]}>
    <Text style={styles.typingText}>
  🤖 AI is typing...
</Text>
  </View>
)}
      </ScrollView>

      <View style={styles.inputRow}>

  <TextInput
    style={styles.input}
    placeholder="Ask anything..."
    placeholderTextColor="gray"
    value={question}
    onChangeText={setQuestion}
  />

  <TouchableOpacity
    style={styles.sendButton}
    onPress={handleSend}
  >
    <Ionicons
      name="send"
      size={22}
      color="white"
    />
  </TouchableOpacity>

</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop: 25,
  marginBottom: 40,
  backgroundColor: "#142B45",
  borderRadius: 20,
  padding: 15,
  borderWidth: 1,
  borderColor: "#2E4C6D",
},

  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  chatContainer: {
    maxHeight: 250,
    marginBottom: 10,
  },

  message: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "85%",
  },

  aiMessage: {
    backgroundColor: "#1A1A1A",
    alignSelf: "flex-start",
  },

  userMessage: {
    backgroundColor: "#D4AF37",
    alignSelf: "flex-end",
  },

  messageText: {
    color: "white",
  },
  typingText: {
  color: "#B0B0B0",
  fontStyle: "italic",
},

  input: {
  flex: 1,
  backgroundColor: "#1A1A1A",
  color: "white",
  borderRadius: 25,
  paddingHorizontal: 15,
  height: 50,
},
inputRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
},

  sendButton: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: "#D4AF37",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 10,
},

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#111",
  },
});
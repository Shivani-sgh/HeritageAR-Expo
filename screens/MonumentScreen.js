import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getUserRole } from "../firebase/userService";
import { buildPrompt } from "../firebase/llmService";

export default function MonumentScreen({ route }) {
  const { uid } = route.params;

  const [text, setText] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const role = await getUserRole(uid);

    const prompt = buildPrompt(
      role,
      "Taj Mahal",
      "Built by Shah Jahan in memory of Mumtaz Mahal."
    );

    // later: send to Gemini API
    setText(prompt); // temporary preview
  };

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  TextInputComponent,
} from "react-native";
import { Component } from "react";
import AppTextInput from "./app/components/AppTextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./app/config/colors";

import Calculation from "./app/components/Calculation";

export default function App() {
  const [userWord, setUserWord] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Calculation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

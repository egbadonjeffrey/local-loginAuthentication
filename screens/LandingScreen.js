import React from "react";
import * as constant from "../constants/constants";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const LandingScreen = ({ onAthenticate }) => {
  return (
    <View>
      <Text>Landing Page</Text>
      <ButtonComponent />
      <TouchableOpacity style={styles.authButton} onPress={onAthenticate}>
        <Text style={styles.authText}> Authenticate </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {},
  authButton: {
    alignItems: "center",
    backgroundColor: "green",
    marginHorizontal: 50,
    height: 30,
    borderRadius: 200,
    justifyContent: "center",
  },
  authText: {
    color: "white",
    alignItems: "center",
    fontWeight: "500",
  },
});

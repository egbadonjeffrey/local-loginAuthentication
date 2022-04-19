import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PaymentScreen from "./screens/PaymentScreen";
import StatusArea from "./components/StatusArea";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import * as LocalAuthentication from "expo-local-authentication";

const App = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  function onAthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      console.log(result);
    });
  }

  return (
    <ScrollView Style={styles.containerAppView}>
      <StatusArea />
      {isAuthenticated ? (
        <LoginScreen />
      ) : (
        <LandingScreen onAthenticate={onAthenticate} />
      )}

      {/* <PaymentScreen /> */}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerAppView: {
    flex: 1,
  },
});

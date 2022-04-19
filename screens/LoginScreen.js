import * as constants from "../constants/constants";
import ButtonComponent from "../components/ButtonComponent";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <ButtonComponent />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

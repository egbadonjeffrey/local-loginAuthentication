import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import * as constants from "../constants/constants";
import * as button_constants from "../constants/button_constants";

const ButtonComponent = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonText}>
          {button_constants.buttonText.default}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    width: constants.WINDOW_DIMENSIONS.SCREEN_WIDTH,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: button_constants.primary_color,
    width: constants.WIDTH_PERCENTAGE.semi_medium,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: constants.VALUES.xxlarge,
    marginVertical: constants.VALUES.medium,
    height: constants.VALUES.medium,
    borderRadius: constants.VALUES.Hund_large,
  },
  buttonText: {
    fontSize: constants.VALUES.xxsmall,
    color: button_constants.white_color,
    paddingVertical: 3,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

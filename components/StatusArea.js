import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import React from "react";
import * as constants from "../constants/constants";
import color, { COLORS } from "../constants/colors";

const StatusArea = () => {
  return (
    <View style={styles.StatusArea}>
      {Platform.OS === "ios" ? <StatusBar /> : <StatusBar hidden />}
    </View>
  );
};

export default StatusArea;

const styles = StyleSheet.create({
  StatusArea: {
    height:
      Platform.OS === "ios"
        ? constants.WINDOW_DIMENSIONS.IOS_STATUS_HEIGHT
        : constants.WINDOW_DIMENSIONS.ANDRIOD_STATUS_HEIGHT,
    backgroundColor: COLORS.primary,
  },
  StatusBackgroundColor: {
    backgroundColor: COLORS.primary,
  },
});

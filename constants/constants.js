import { Dimensions, StatusBar } from "react-native";

export const VALUES = {
  xsmall: 10,
  xxsmall: 15,
  small: 20,
  semi_medium: 30,
  medium: 40,
  semi_large: 50,
  large: 60,
  xlarge: 70,
  xxlarge: 80,
  xxxlarge: 90,
  Hund_large: 100,
};

export const WIDTH_PERCENTAGE = {
  small: 100,
  semi_medium: 200,
  medium: "60%",
  semi_large: "70%",
  large: "80%",
  entire: "100%",
};

export const WIDTH_DPI = {
  small: 200,
  semi_medium: 300,
  medium: 400,
  semi_large: 500,
  large: 600,
  entire: 650,
};

export const WINDOW_DIMENSIONS = {
  WINDOW_HEIGHT: Dimensions.get("window").height,
  STATUS_BAR_HEIGHT: StatusBar.currentHeight,
  SCREEN_WIDTH: Dimensions.get("window").width,
  ANDRIOD_STATUS_HEIGHT: 1,
  IOS_STATUS_HEIGHT: 40,
};

export const IMAGES = {
  profile_icon: require("../assets/profile.png"),
  logo_image: require("../assets/logo.jpg"),
};

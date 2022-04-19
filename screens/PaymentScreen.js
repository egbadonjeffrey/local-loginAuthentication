import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import CardSVG from "../components/CardSVG";
import * as constant from "../constants/constants";
import * as color from "../constants/colors";

const PaymentScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dashBoard}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Dashboard</Text>
          <Image
            source={constant.IMAGES.profile_icon}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.profileDetails}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
          />

          <Text style={[styles.profileName, styles.text]}>Jennifer Lopez</Text>
          <Text style={[styles.balanceTitle, styles.text]}>Balance</Text>
          <Text style={[styles.balanceAmount, styles.text]}>$5000</Text>
        </View>
      </View>
      <View style={styles.inputCard}>
        <TextInput />
        <CardSVG />
      </View>
      <ButtonComponent />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashBoard: {
    backgroundColor: color.COLORS.primary,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "flex-start",
  },
  profileDetails: {
    alignItems: "center",
    textAlign: "center",
    margin: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 1000,
    marginBottom: constant.VALUES.small,
  },
  headerContainer: {
    width: constant.WINDOW_DIMENSIONS.SCREEN_WIDTH - constant.VALUES.medium,
    height: constant.VALUES.semi_large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
  },
  profileImage: {
    width: constant.VALUES.semi_large,
    height: constant.VALUES.semi_large,
    borderRadius: 1000,
    borderColor: color.COLORS.black,
  },
  text: {
    textAlign: "center",
  },
  profileName: {
    fontSize: constant.VALUES.semi_medium,
    fontWeight: "400",
    color: color.COLORS.white,
  },
  balanceTitle: {
    fontSize: constant.VALUES.xxsmall,
    color: color.COLORS.black,
    fontWeight: Platform.OS === "ios" ? "600" : "400",
  },
  balanceAmount: {
    fontSize: constant.VALUES.medium,
    color: color.COLORS.white,
    fontWeight: "bold",
  },
  inputCard: {
    width: constant.WINDOW_DIMENSIONS.SCREEN_WIDTH,
    alignItems: "center",
  },
});

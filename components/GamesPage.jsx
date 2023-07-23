import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  GAMBannerAd,
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { Dimensions } from "react-native";
import HeaderAllApp from "./Header";
import FooterAllApp from "./Footer";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-1728967763465520/6218244519";

const StartPage = () => {
  const handleStartPress = () => {};

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/lachlan-dempsey-6VPEOdpFNAs-unsplash.png")}
        onError={handleImageError}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <HeaderAllApp />
        <ScrollView contentContainerStyle={styles.containerScrol}>
          <View style={styles.ads}>
            <GAMBannerAd
              unitId={adUnitId}
              sizes={[BannerAdSize.MEDIUM_RECTANGLE, BannerAdSize.FULL_BANNER]}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
          <Text style={styles.title}>Coming soon ... </Text>
        </ScrollView>
        <FooterAllApp />
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  welcomeText: {
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#ffbc06",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: "30%",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  btnMore: {
    marginTop: 10,
  },
  ads: {
    width: windowWidth,
    alignItems: "center",
    padding: 12,
    backgroundColor: "#ffbc06",
    borderRadius: 20,
  },
  containerScrol: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffbc06",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    color: "#fff",
  },
});

export default StartPage;

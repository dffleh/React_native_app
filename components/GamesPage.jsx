import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  GAMBannerAd,
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { OVERLAY_BACKDROP } from "../appConstants";

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
      <View style={styles.overlay} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: OVERLAY_BACKDROP,
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
    width: "100%",
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

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
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

const ModsPage = () => {
  const handleStartPress = () => {};

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/backgroundPokemon-min.png")}
        onError={handleImageError}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <HeaderAllApp />
        <ScrollView contentContainerStyle={styles.containerScrol}>
          <View style={styles.ads}>
            <GAMBannerAd
              unitId={adUnitId}
              sizes={[BannerAdSize.LARGE_BANNER, BannerAdSize.FULL_BANNER]}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <TouchableOpacity style={styles.hexagonButton}>
                <ImageBackground
                  source={require("../images/previewPixelmon-min.png")}
                  style={styles.backgroundImageMod}
                >
                  <Text style={styles.buttonTextB}>Mods</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              <TouchableOpacity style={styles.hexagonButton}>
                <ImageBackground
                  source={require("../images/previewPokeBase-min.png")}
                  style={styles.backgroundImageMod}
                >
                  <Text style={styles.buttonTextB}>Mods</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              <TouchableOpacity style={styles.hexagonButton}>
                <ImageBackground
                  source={require("../images/previewPokedrockAnime-min.png")}
                  style={styles.backgroundImageMod}
                >
                  <Text style={styles.buttonTextB}>Mods</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              <TouchableOpacity style={styles.hexagonButton}>
                <ImageBackground
                  source={require("../images/previewPokemonBP-min.png")}
                  style={styles.backgroundImageMod}
                >
                  <Text style={styles.buttonTextB}>Mods</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              <TouchableOpacity style={styles.hexagonButton}>
                <ImageBackground
                  source={require("../images/previewPokemonRP-min.png")}
                  style={styles.backgroundImageMod}
                >
                  <Text style={styles.buttonTextB}>Mods</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              <TouchableOpacity style={styles.hexagonButton}>
                <ImageBackground
                  source={require("../images/backgroundPokemon-min.png")}
                  style={styles.backgroundImageMod}
                >
                  <Text style={styles.buttonTextB}>Mods</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
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
  backgroundImageMod: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ads: {
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
  hexagonButton: {
    width: 150,
    height: 100,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    // backgroundColor: "#ffbc06",
  },
  buttonTextB: {
    lineHeight: 55,
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 5,
    color: "#e61515",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 80,
  },
  grid: {
    borderWidth: 4,
    borderColor: "#ffbc06",
    borderRadius: 16,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 4,
  },
});

export default ModsPage;

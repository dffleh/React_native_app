import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Dimensions } from "react-native";
import "expo-dev-client";
import StartPage from "./components/StartPages";
import GamesPage from "./components/GamesPage";
import ModsPage from "./components/ModsPage";
import SettingsPage from "./components/SettingsPage";
import ModDetailsAndDowload from "./components/ModDetailsAndDowload";
import HeaderAllApp from "./components/Header";
import FooterAllApp from "./components/Footer";
import { IMAGE_BACKGROUND } from "./appConstants";

// startAds = "ca-app-pub-1728967763465520/2459781141"
// interstitial ad "ca-app-pub-1728967763465520/5298874899"
// rewarded ad "ca-app-pub-1728967763465520/9227551232"
// banner ad "ca-app-pub-1728967763465520/6218244519"

const windowWidth = Dimensions.get("window").width;

export default function App() {
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGE_BACKGROUND}
        onError={handleImageError}
        style={styles.backgroundImage}
      >
        <HeaderAllApp />
        <StartPage />
        {/* <GamesPage /> */}
        {/* <ModsPage /> */}
        {/* <ModDetailsAndDowload /> */}
        {/* <SettingsPage /> */}
        <FooterAllApp />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: windowWidth,
    resizeMode: "cover",
  },
});

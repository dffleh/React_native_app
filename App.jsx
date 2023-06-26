import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "expo-dev-client";

import StartPage from "./StartPages";
// startAds = "ca-app-pub-1728967763465520/2459781141"
// interstitial ad "ca-app-pub-1728967763465520/5298874899"
// rewarded ad "ca-app-pub-1728967763465520/9227551232"
// banner ad "ca-app-pub-1728967763465520/6218244519"

export default function App() {
  return (
    <View style={styles.container}>
      <StartPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

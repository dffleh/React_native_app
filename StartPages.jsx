import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-1728967763465520/6218244519";

const StartPage = () => {
  const handleStartPress = () => {};

  const handleExitPress = () => {
    // Handle the exit button press here
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/lachlan-dempsey-6VPEOdpFNAs-unsplash.png")}
        onError={handleImageError}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <Text style={styles.welcomeText}>Welcome to the Game Info App!</Text>
        <TouchableOpacity
          title="Show Interstitial"
          style={styles.button}
          onPress={handleStartPress}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleExitPress}>
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
        <View style={styles.ads}>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  fallbackBackground: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    position: "absolute",
    top: "25%",
  },
  button: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: "30%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  ads: {
    position: "absolute",
    bottom: 10,
  },
});

export default StartPage;

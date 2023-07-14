import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  GAMBannerAd,
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

  // Функція для переходу на сторінку з модами
  const goToModsPage = () => {
    // Виконати дії для переходу на сторінку з модами
  };

  // Функція для переходу на сторінку з міні іграми
  const goToMiniGamesPage = () => {
    // Виконати дії для переходу на сторінку з міні іграми
  };

  // Функція для переходу на головну сторінку
  const goToHomePage = () => {
    // Виконати дії для переходу на головну сторінку
  };

  // Функція для відкриття налаштувань
  const openSettings = () => {
    // Виконати дії для відкриття налаштувань
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/lachlan-dempsey-6VPEOdpFNAs-unsplash.png")}
        onError={handleImageError}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={styles.coinContainer}>
            <Text style={styles.coinText}>100 Coin</Text>
          </View>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={openSettings}
          >
            <Text style={styles.buttonText}>Set</Text>
          </TouchableOpacity>
        </View>
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
          <GAMBannerAd
            unitId={adUnitId}
            sizes={[BannerAdSize.LARGE_BANNER, BannerAdSize.FULL_BANNER]}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
        <View style={styles.footer}>
          {/* Три кнопки в нижній частині */}
          <TouchableOpacity style={styles.footerButton} onPress={goToHomePage}>
            {/* Кнопка для переходу на головну сторінку */}
            {/* Додайте іконку або текст для кнопки */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={goToModsPage}>
            {/* Кнопка для переходу на сторінку з модами */}
            {/* Додайте іконку або текст для кнопки */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={goToMiniGamesPage}
          >
            {/* Кнопка для переходу на сторінку з міні іграми */}
            {/* Додайте іконку або текст для кнопки */}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  backgroundImage: {
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: 80,
    backgroundColor: "#cdd838",
  },
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    right: "5%",
  },
  coinContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#b42020",
  },
  coinText: {
    textAlign: "center",
    color: "#fff",
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
    backgroundColor: "#fff",
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
  ads: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#6ff1ca",
    // width: "100%",
    // position: "absolute",
    // bottom: 10,
    borderRadius: 20,
  },
  footer: {
    height: 40,
    width: "100%",
    backgroundColor: "#fff",
    // flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: "center",
    // paddingBottom: 16,
  },
  footerButton: {
    // Стилі для кнопок в нижній частині
  },
});

export default StartPage;

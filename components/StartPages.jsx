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
          <Text style={styles.welcomeText}>Welcome to the Game Info App!</Text>

          <Text style={styles.title}>Minecraft Companion</Text>
          <View style={styles.ads}>
            <GAMBannerAd
              unitId={adUnitId}
              sizes={[BannerAdSize.MEDIUM_RECTANGLE, BannerAdSize.FULL_BANNER]}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
          <Text style={styles.description}>
            Ласкаво просимо до Minecraft Companion! Цей додаток призначений для
            покращення вашого досвіду гри Minecraft. Він надає доступ до модів,
            мап, скінів, актуальної інформації про гру, міні-ігор та внутрішньої
            валюти MCoin. Використовуйте додаток, щоб знайти нові можливості і
            насолоджуватися грою у Minecraft ще більше!
          </Text>
          <Text style={styles.description}>
            Інші функції додатку включають можливість зберігати ваші улюблені
            моди та мапи, створювати свої власні міні-ігри та заробляти MCoin,
            виконуючи різноманітні завдання та переглядаючи рекламу.
            Використовуйте всі ці можливості, щоб підвищити свою геймплейну
            валюту та насолоджуватися грою Minecraft ще більше!
          </Text>
          <View style={styles.ads}>
            <GAMBannerAd
              unitId={adUnitId}
              sizes={[BannerAdSize.BANNER, BannerAdSize.FULL_BANNER]}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
          <Text style={styles.description}>
            Інші функції додатку включають можливість зберігати ваші улюблені
            моди та мапи, створювати свої власні міні-ігри та заробляти MCoin,
            виконуючи різноманітні завдання та переглядаючи рекламу.
            Використовуйте всі ці можливості, щоб підвищити свою геймплейну
            валюту та насолоджуватися грою Minecraft ще більше!
          </Text>
          <Text style={styles.description}>
            Інші функції додатку включають можливість зберігати ваші улюблені
            моди та мапи, створювати свої власні міні-ігри та заробляти MCoin,
            виконуючи різноманітні завдання та переглядаючи рекламу.
            Використовуйте всі ці можливості, щоб підвищити свою геймплейну
            валюту та насолоджуватися грою Minecraft ще більше!
          </Text>
          <Text style={styles.description}>
            Інші функції додатку включають можливість зберігати ваші улюблені
            моди та мапи, створювати свої власні міні-ігри та заробляти MCoin,
            виконуючи різноманітні завдання та переглядаючи рекламу.
            Використовуйте всі ці можливості, щоб підвищити свою геймплейну
            валюту та насолоджуватися грою Minecraft ще більше!
          </Text>
          <View style={styles.ads}>
            <GAMBannerAd
              unitId={adUnitId}
              sizes={[BannerAdSize.LARGE_BANNER, BannerAdSize.FULL_BANNER]}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
          <View style={styles.btnMore}>
            <TouchableOpacity
              title="Show Interstitial"
              style={styles.button}
              onPress={handleStartPress}
            >
              <Text style={styles.buttonText}>Soon...</Text>
            </TouchableOpacity>
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

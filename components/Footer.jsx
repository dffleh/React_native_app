import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const FooterAllApp = () => {
  // Функція для переходу на сторінку з модами
  const goToModsPage = () => {
    // Виконати дії для переходу на сторінку з модами
  };

  // Функція для переходу на сторінку з міні іграми
  const goToMiniGamesPage = () => {
    // Виконати дії для переходу на сторінку з міні іграми
  };

  // Функція для переходу на головну сторінку
  const goToStartPage = () => {
    // Виконати дії для переходу на головну сторінку
  };

  return (
    <View style={styles.footer}>
      <View style={styles.hexagonButtonContainer}>
        <TouchableOpacity style={styles.hexagonButton} onPress={goToModsPage}>
          <View style={styles.face1} />
          <View style={styles.face2} />
          <Text style={styles.buttonTextB}>Mods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hexagonButton} onPress={goToStartPage}>
          <View style={styles.face1} />
          <View style={styles.face2} />
          <Text style={styles.buttonTextB}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hexagonButton}
          onPress={goToMiniGamesPage}
        >
          <View style={styles.face1} />
          <View style={styles.face2} />
          <Text style={styles.buttonTextB}>Games</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    paddingTop: 28,
    bottom: "0%",
    height: 110,
    width: "100%",
    backgroundColor: "#444444",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  hexagonButtonContainer: {
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hexagonButton: {
    width: 95,
    height: 55,
    backgroundColor: "#ffbc06",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  face1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#bd8c07",
    transform: [{ rotate: "60deg" }],
  },
  face2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#ffbc06",
    transform: [{ rotate: "-60deg" }],
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
});

export default FooterAllApp;

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const HeaderAllApp = () => {
  const openSettings = () => {
    // Виконати дії для відкриття налаштувань
  };

  return (
    <View style={styles.header}>
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>100 Coin</Text>
      </View>
      <TouchableOpacity style={styles.settingsButton} onPress={openSettings}>
        <Text style={styles.buttonText}>Set</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    height: 80,
    backgroundColor: "#ffbc06",
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
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default HeaderAllApp;

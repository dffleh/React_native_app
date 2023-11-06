import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const HeaderAllApp = () => {
  const openSettings = () => {
    // Виконати дії для відкриття налаштувань
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.coinContainer} onPress={openSettings}>
        <Text style={styles.coinText}>
          <Text style={styles.coinPlus}>+</Text> 100 Coin
        </Text>
      </TouchableOpacity>
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
    bottom: 5,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    right: "5%",
  },
  coinContainer: {
    width: 120,
    height: 40,
    bottom: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#444444",
  },
  coinText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
  coinPlus: { color: "#ffbc06" },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default HeaderAllApp;

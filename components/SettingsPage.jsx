import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const availableLanguages = ["English", "Spanish", "French", "German"];

const SettingsPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLanguageChange = (itemValue, itemIndex) => {
    setSelectedLanguage(itemValue);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.setting}>
        <Text style={styles.label}>Language</Text>
        {/* <Picker
          selectedValue={selectedLanguage}
          style={styles.picker}
          onValueChange={handleLanguageChange} // Update this line
        >
          v{aailableLanguages.map((language) => (
            <Picker.Item label={language} value={language} key={language} />
          ))}
        </Picker> */}
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Notification</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Dark mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f3eec4",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    padding: 16,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    padding: 16,
  },
  label: {
    fontSize: 18,
  },
  saveButton: {
    width: "40%",
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    left: "30%",
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsPage;

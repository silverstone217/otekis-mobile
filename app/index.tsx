import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { API_URL } from "../constants";
import { StatusBar } from "expo-status-bar";

const index = () => {
  if (!API_URL) {
    return (
      <View style={[styles.container, { padding: 20, gap: 10 }]}>
        <Text
          style={{
            fontSize: 60,
            fontWeight: "600",
          }}
        >
          404
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "dimgray",
          }}
        >
          Page introuvable, réessayez plus tard!
        </Text>
        <StatusBar style="dark" animated />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: API_URL }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        sharedCookiesEnabled={true} // Important pour partager les cookies d’authentification
        originWhitelist={["*"]}
        userAgent="Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"
        thirdPartyCookiesEnabled
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

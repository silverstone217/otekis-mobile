import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { SplashScreen, Stack } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (API_URL) {
      setTimeout(() => {
        setLoading(false);
        SplashScreen.hideAsync();
      }, 3000);
    }
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"dodgerblue"} />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        title: "Boutique",
      }}
    />
  );
};

export default layout;

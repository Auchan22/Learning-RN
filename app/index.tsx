import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "@/components";
import Header from "@/components/common/header/Header";
import { COLORS, SIZES, icons, images } from "@/constants";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { useCallback } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Page() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    DMBold: require("@/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("@/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("@/assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

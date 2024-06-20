import { COLORS, icons, images } from "@/constants";
import { Stack } from "expo-router";
import React from "react";
import ScreenHeaderBtn from "./ScreenHeaderBtn";

const Header = () => {
  return (
    <Stack.Screen
      options={{
        headerStyle: {
          backgroundColor: COLORS.lightWhite,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn
            icon={icons.menu}
            dimension="60%"
            handlePress={() => console.log("hola")}
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn
            icon={images.profile}
            dimension="100%"
            handlePress={() => console.log("chau")}
          />
        ),
        headerTitle: "",
      }}
    />
  );
};

export default Header;

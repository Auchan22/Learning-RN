import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";

import styles from "./screenheader.style";

interface Props {
  icon: ImageSourcePropType;
  dimension: string;
  handlePress: (e: GestureResponderEvent) => void;
}

const ScreenHeaderBtn = ({ icon, dimension, handlePress }: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={icon}
          resizeMode="cover"
          style={styles.btnImg(dimension) as StyleProp<ImageStyle>}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;

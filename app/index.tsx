import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <TouchableOpacity onPress={() => console.log("Ay! Me apretaste")}>
        <View style={styles.button}>
          <Text>Clickeame</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    shadowColor: "red",
    shadowOffset: { height: 10, width: 5 },
    backgroundColor: "#e4f4f5",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contain} />
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F49E15",
    alignItems: "center",
    justifyContent: "center",
  },
  contain: {
    width: 1000,
    height: 1000,
    borderRadius: 500,
    backgroundColor: "#fff",
    position: "absolute",
    top: 150,
  },
  text: {
    zIndex: 1,
    fontSize: 18,
    color: "#000",
  },
});

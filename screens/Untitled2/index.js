import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lVcbzfhv: {
    width: 195,
    height: 168,
    lineHeight: 15,
    fontSize: 15,
    borderRadius: 0,
    opacity: 1,
    color: "#dc0b0b",
    top: 0,
    left: 163,
    transform: "rotate(360deg)",
    position: "absolute",
    fontWeight: "700",
    fontFamily: "Nunito",
    textAlign: "left"
  }
});
export default Untitled2;
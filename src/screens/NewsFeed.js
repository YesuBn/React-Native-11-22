import React from "react";
import Navbar from "../components/Navbar";
import Post1 from "../components/Post1";
import Post2 from "../components/Post2";
import Post3 from "../components/Post3";
import { View, ScrollView, StyleSheet } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Post1 />
        <Post2 />
        <Post3 />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

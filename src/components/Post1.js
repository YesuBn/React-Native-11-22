import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function () {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}>
        <Image
          style={styles.postImage1}
          source={require("../../assets/Anudari_1.png")}
        />
        <View style={styles.postTitleWrapper}>
          <Text style={styles.postTitle1}>
            А.АНУДАРЬ: Шинэ Монгол технологийн дээд сургуулийн төгсөгчдийг аль ч
            компани маш дуртай, нааштайгаар хүлээж авдаг
          </Text>
          <Button
            title="Дэлгэрэнгүй"
            onPress={() => navigation.navigate("PostInfo")}
          ></Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "45%",
    backgroundColor: "#773537",
    borderRadius: 25,
  },

  postImage1: {
    width: "100%",
    height: 300,
    borderRadius: 25,
  },
  postTitleWrapper: {
    bottom: 45,
    width: "100%",
    height: "40%",
    backgroundColor: "#773537",
    borderRadius: 25,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  postTitle1: {
    color: "white",
    opacity: 1,
  },
});

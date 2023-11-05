import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

export default function PlanScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            McDonald's Cheeseburger
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Calories: 200{"\n"}Protein: 10g{"\n"}Fat: 3g {"\n"}Carbs:5g
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Wendy's Baconator
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Calories:300{"\n"}Protein:10g{"\n"}Fat:5g
            {"\n"}
            Carbs:5g
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Chipotle Burrito(chicken,brown rice, salsa, avocado)
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Calories:400
            {"\n"}Protein:15g{"\n"}Fat:10g
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 15,
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            In n Out Burger
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Calories:400
            {"\n"}Protein:10g{"\n"}Fat:4g{"\n"}Carbs:4g
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 15,
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Chick Fil A Sandwich
          </Text>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Calories:400
            {"\n"}Protein:14g{"\n"}Fat:4g{"\n"}Carbs:4g
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF7F7",
  },
  box: {
    width: 350,
    height: 150,
    marginTop: 75,
    borderRadius: 30,
    backgroundColor: "#EF8585",
    textAlign: "center",
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function DetailsScreen({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "#FFF7F7", flex: 1, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 25,
            top: 25,
            marginTop: "10%",
            fontFamily: "sfreg",
          }}
        >
          Welcome to
        </Text>
        <Text style={{ fontSize: 40, top: 10 }}>Seasoned</Text>
        <View
          style={{
            width: 300,
            height: 450,
            top: 70,
            backgroundColor: "#ffffff",
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: 300,
            height: 450,
            top: 77,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Image
          style={{
            height: 200,
            width: 250,
            top: 220,
            position: "absolute",
            borderRadius: 10,
          }}
          source={require("./assets/spqr_bayareaballer15_pork.0.0.1452694119.0.jpg")}
        />
        <Image
          style={{
            height: 200,
            width: 250,
            top: 700,
            position: "absolute",
            borderRadius: 10,
          }}
          source={require("./assets/mobile-application-for-scanning-qr-code-hand-holding-smartphone-scan-qr-code-icon-phone-app-barcode-scanner-vector.jpg")}
        />
        <Text
          style={{
            top: -600,
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "sfreg",
          }}
        >
          Create Your Plan
        </Text>
        <Text
          style={{
            top: 470,
            fontSize: 15,
            position: "absolute",
            marginLeft: 100,
            textAlign: "center",
            fontFamily: "sfreg",
          }}
        >
          Create your personalized bulking or cutting diet and workout plans.
        </Text>
        <Text
          style={{
            top: 920,
            left: 175,
            fontSize: 25,
            position: "absolute",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "sfreg",
          }}
        >
          Scan
        </Text>
        <Text
          style={{
            top: 960,
            fontSize: 15,
            position: "absolute",
            marginLeft: 100,
            textAlign: "center",
            fontFamily: "sfreg",
          }}
        >
          Scan barcodes to recieve nutritional information
        </Text>

        <TouchableOpacity
          style={{
            top: -40,
            backgroundColor: "#EF8585",
            padding: 15,
            borderRadius: 15,
            width: "60%",
          }}
          onPress={() => navigation.navigate("Scan")}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontFamily: "sfreg" }}
          >
            Go
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            top: -570,
            backgroundColor: "#EF8585",
            padding: 15,
            borderRadius: 15,
            width: "60%",
          }}
          onPress={() => navigation.navigate("Macro Finder")}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontFamily: "sfreg" }}
          >
            Go
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    overflowY: "scroll",
    position: "relative",
    backgroundColor: "#FFF7F7",
  },
  barcodecontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  innercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  dropdownContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#000000",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "sfreg",
  },
  dropdown: {
    height: 50,
    width: "90%",
    borderColor: "#000000",
    borderWidth: 3,
    borderRadius: 20,
  },
  formContainer: {
    marginBottom: "10%",
    width: "95%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },
  submitButtonContainer: {
    width: "50%",
  },
  button: {
    width: "50%",
  },
  tabContainer: {
    textAlign: "center",
  },
  tabButton: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  setting: {},
});

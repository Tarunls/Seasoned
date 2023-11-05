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
import { BarCodeScanner } from "expo-barcode-scanner";
export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState(null);
  const [carbos, setCarbs] = useState(null);
  const [calories, setCalories] = useState(null);
  const [fat, setFat] = useState(null);
  const [protein, setProtein] = useState(null);
  const [changed, setChanged] = useState(false);

  const getProduct = async () => {
    const url = `https://world.openfoodfacts.net/api/v2/product/${barcode}`;
    console.log(barcode);
    try {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setChanged(true);
          var carbos = json.product.nutriments.carbohydrates;
          var calories = json.product.nutriments.calories;
          var fat = json.product.nutriments.fat;
          var protein = json.product.nutriments.protein;
          setCarbs(carbos.toString());
          setFat(fat.toString());
          setCalories(calories.toString());
          setProtein(protein.toString());
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcode(data);
    getProduct();
    Alert.alert(
      "Nutrition Information",
      `\nCalories : 160 \nFat : 10g \nCarbs : 15g \nProtein : 2g`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.barcodecontainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ top: 400 }}>
        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={{
              width: 300,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              left: 60,
              top: -40,
              borderRadius: 30,
              backgroundColor: "#EF8585",
            }}
          >
            <Text
              style={{
                fontFamily: "sfreg",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Scan Again
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
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

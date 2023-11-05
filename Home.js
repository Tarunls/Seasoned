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

export default function HomeScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState();
  const [formData, setFormData] = useState({
    drop1: "",
    drop2: "",
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  json = "";
  const thebigstring =
    "What are fast food recommendations for " +
    formData["drop1"] +
    " when I have " +
    formData["drop2"] +
    " meals left in the day and I have already eaten " +
    formData["input1"] +
    " grams of Protein, " +
    formData["input2"] +
    " grams of Carbs, " +
    formData["input3"] +
    " grams of Fat, and " +
    formData["input4"] +
    " Calories, based on daily recommended calorie limits?";
  const handleOptionChange = (label, value) => {
    setSelectedOption(value);
    setFormData({
      ...formData,
      [label]: value,
    });
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // You can perform actions with the form data here
    console.log("Form Data:", formData);
    navigation.navigate("Plan");
    setChange(true);
    Alert.alert(json);
  };
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [change, setChange] = useState(false);
  const back = "<";
  useEffect(() => {
    /*
    const chatgptApiCall = async () => {
      fetch(`https://api.openai.com/v1/chat/completions`, {
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
          temperature: 0.3,
          max_tokens: 2000,
        }),
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer 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",
        },
      }).then((response) => {
        console.log(response); //If you want to check the full response
        if (response.ok) {
          response.json().then((json) => {
            console.log(json.choices[0].message.content); //HERE'S THE CHATBOT'S RESPONSE
          });
        }
      });
    };

    chatgptApiCall();*/
    const openAISummarizer = async () => {
      const apikey = "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";
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              prompt: thebigstring,
              max_tokens: 7,
              temperature: 0,
            }),
          }
        );
        json = await response.json();
        console.log("this is the result", json);
      } catch (error) {
        console.error("this is the result", error);
      }
    };
    openAISummarizer();
    setChange(false);
  }, [change]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          top: 30,
          backgroundColor: "#EF8585",
          padding: 17,
          borderRadius: 100,
          width: "15%",
          textAlign: "center",
          fontFamily: "sfreg",
        }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={{ fontSize: 20, fontFamily: "sfreg" }}>{back}</Text>
      </TouchableOpacity>

      <View style={styles.innercontainer}>
        <Text
          style={{
            fontSize: 25,
            top: 30,
            marginBottom: "3%",
            fontFamily: "sfreg",
          }}
        >
          Seasoned
        </Text>
        <Text
          style={{
            fontSize: 40,
            top: 10,
            marginBottom: "12%",
            fontFamily: "sfreg",
          }}
        >
          Macro Finder
        </Text>
        <View style={styles.dropdownContainer}>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedOption}
            onValueChange={(value) => handleOptionChange("drop1", value)}
          >
            <Picker.Item label="Diet..." value="diet" enabled={false} />
            <Picker.Item label="Bulking" value="Bulking" />
            <Picker.Item label="Cutting" value="Cutting" />
            <Picker.Item label="Maintain" value="Maintain" />
          </Picker>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedOption}
            onValueChange={(value) => handleOptionChange("drop2", value)}
          >
            <Picker.Item
              label="No. of Meals..."
              value="meals"
              enabled={false}
            />
            <Picker.Item label="1 Meal" value="1" />
            <Picker.Item label="2 Meal" value="2" />
            <Picker.Item label="3 Meal" value="3" />
          </Picker>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Macros Eaten</Text>
          <TextInput
            style={styles.input}
            placeholder="Protein (g)"
            onChangeText={(text) => handleInputChange("input1", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Carbs (g)"
            onChangeText={(text) => handleInputChange("input2", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Fat (g)"
            onChangeText={(text) => handleInputChange("input3", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Calories"
            onChangeText={(text) => handleInputChange("input4", text)}
          />
          <View style={styles.submitButtonContainer}></View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#EF8585",
            padding: 15,
            borderRadius: 15,
            width: "100%",
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontFamily: "sfreg" }}
          >
            Search
          </Text>
        </TouchableOpacity>
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

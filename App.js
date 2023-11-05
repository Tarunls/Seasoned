/*import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";
const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [change, setChange] = useState(false);
  useEffect(() => {
 
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

    chatgptApiCall();
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
              prompt: userInput,
              max_tokens: 7,
              temperature: 0,
            }),
          }
        );

        const json = await response.json();
        console.log("this is the result", json);
      } catch (error) {
        console.error("this is the result", error);
      }
    };
    openAISummarizer();
    setChange(false);
  }, [change]);

  return (
    <View>
      <Text>{message}</Text>
      <View>
        <TextInput
          value={userInput}
          style={{ height: 100, borderColor: "gray", borderWidth: 1 }}
          onChangeText={setUserInput}
          placeholder="Type a message"
        />
        <Button
          title="Send"
          onPress={() => {
            setChange(true);
          }}
        />
      </View>
    </View>
  );
};

export default App;
*/
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Register";
import Login from "./Login";
import HomeScreen from "./Home";
import ScanScreen from "./Scan";
import DetailsScreen from "./DetailsScreen";
import PlanScreen from "./PlanScreen";
function SignUp({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        sfreg: require("./assets/fonts/SF-Pro.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>

      <Text
        style={{
          fontSize: 25,
          top: -1030,
          color: "#353839",
          fontFamily: "sfreg",
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontSize: 40,
          top: -1045,
          color: "#0e1111",
          fontFamily: "sfreg",
        }}
      >
        Seasoned
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.textF}>Sign Up</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          top: 315,
          position: "absolute",
          fontFamily: "sfreg",
        }}
      >
        Or
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textF}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Macro Finder"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Scan"
          component={ScanScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Plan"
          component={PlanScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//stylesheet
const styles = StyleSheet.create({
  //add style to center text and change font size
  container: {
    flex: 1,
    justifyContent: "top",
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#FFF7F7",
  },
  circle: {
    top: 650,
    left: -100,
    width: 400,
    height: 550,
    borderRadius: 200,
    backgroundColor: "#B3FCB3",
  },
  circle2: {
    top: 140,
    left: 125,
    width: 300,
    height: 550,
    borderRadius: 500,
    backgroundColor: "#EF8585",
    zIndex: -1,
  },
  textF: {
    color: "white",
    fontSize: 20,
    fontFamily: "sfreg",
  },
  button: {
    backgroundColor: "#EF8585",
    padding: 10,
    marginTop: 100,
    top: -1100,
    borderRadius: 30,
    width: 275,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "normal",
  },
});

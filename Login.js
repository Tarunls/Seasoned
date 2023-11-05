import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
//import { getAuth, signInWithEmailAndPassword } from "firebase/compat/auth";

export default function Login({ navigation }) {
  //const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleLogin = () => {
    navigation.navigate("Details");
    /*
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigation.navigate("Register");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });*/
  };
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 25, top: 70, color: "#353839", fontFamily: "sfreg" }}
      >
        Welcome to
      </Text>
      <Text
        style={{ fontSize: 40, top: 55, color: "#0e1111", fontFamily: "sfreg" }}
      >
        Seasoned
      </Text>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>

      <View style={styles.inputF}>
        <TextInput
          placeholder="  Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={{
            height: 50,
            width: 320,
            marginTop: 50,
            top: -1000,
            backgroundColor: "white",
          }}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="  Enter your Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={{
            height: 50,
            width: 320,
            marginTop: 20,
            top: -1000,
            backgroundColor: "white",
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onHandleLogin()}>
        <Text style={styles.textF}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  //add style to center text and change font size
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "#FFF7F7",
  },
  inputF: {
    fontFamily: "sfreg",
    marginRight: 10,
  },
  textF: {
    color: "white",
    fontSize: 20,
    fontFamily: "sfreg",
  },
  button: {
    backgroundColor: "#EF8585",
    padding: 10,
    marginTop: 50,
    borderRadius: 30,
    width: 275,
    height: 75,
    top: -1000,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "normal",
  },
  circle: {
    top: 550,
    left: -100,
    width: 400,
    height: 550,
    borderRadius: 200,
    backgroundColor: "#B3FCB3",
  },
  circle2: {
    top: 110,
    left: 125,
    width: 300,
    height: 550,
    borderRadius: 500,
    backgroundColor: "#EF8585",
    zIndex: -1,
  },
});

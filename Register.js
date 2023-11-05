import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";
export default function Register({ navigation }) {
  //const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleSignup = async () => {
    /*
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signup success");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });*/
  };
  return (
    <View style={styles.container}>
      {/* Background Image */}

      {/* White Overlay */}
      <View style={styles.whiteSheet} />

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>

      <SafeAreaView style={styles.form}>
        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          showSoftInputOnFocus={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Signup Button */}
        <TouchableOpacity style={styles.button} onPress={() => onHandleSignup}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: 18,
              fontFamily: "sfreg",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Navigation to Login Screen */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "gray",
              fontWeight: "600",
              fontSize: 14,
              fontFamily: "sfreg",
            }}
          >
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#f57c00",
                fontWeight: "600",
                fontSize: 14,
                fontFamily: "sfreg",
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* StatusBar */}
      <StatusBar barStyle="light-content" />
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

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
  Pressable,
  Alert,
} from "react-native";

export default function Login({ navigation }) {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
    if (username.length > 0 && password.length > 0) {
      console.log("Username:", username);
      console.log("Password:", password);
    } else {
      console.log("Empty inputs");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.navMenu}>
        <Button
          title="&#8962;"
          onPress={() => navigation.navigate("Dashboard")}
          style={styles.navBtn}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter username"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <View style={styles.rememberView}>
            <View style={styles.switchContainer}>
              <Switch
                value={click}
                onValueChange={setClick}
                trackColor={{ true: "green", false: "gray" }}
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <Pressable onPress={() => Alert.alert("Forget Password!")}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              onPress={handleLogin}
              style={styles.submitButton}
            />
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.footerText}>
            Don't Have Account?
            <Button title="Sign up" style={styles.submitButton} />
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
  },
  navMenu:{

    marginRight:5,
  marginLeft:'auto'
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    width: 100,
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  rememberView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: 10,
    fontSize: 16,
  },
  forgetText: {
    color: "red",
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
  },
  submitButton: {
    marginLeft: 5,
  },
});

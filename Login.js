import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Switch, Pressable,Image } from 'react-native';
export default function Login({navigation}) {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    if (username.length > 0 && password.length > 0) {
      console.log('Username:', username);
      console.log('Password:', password);
    }
    else {
      console.log('empty inputs')
    }

  };

  return (
    <View style={styles.loginContainer}>
       <Button
    title='Dashboard'
    onPress={() => navigation.navigate('Dashboard')}/>
      <View >
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
        <View style={styles.switch}>
          <Switch value={click} onValueChange={setClick} trackColor={{ true: "green", false: "gray" }} />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.signup}>
      <Button title="Login" onPress={handleLogin} style={styles.submitButton}  />
      </View>
      </View>
      <View style={styles.signup}>
      <Text style={styles.footerText}>Don't Have Account?  <Button title='Sign up' style={styles.submitButton} /></Text>
       </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer:{
    display:'flex',
    width:'100%',
    marginHorizontal:5
  },

  submitButton:{
    height : 45,
    width:48,
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center",
    marginHorizontal:15
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    width: '100%',
  },
  label: {
    flex: '1',
    textAlign: 'right',
    marginRight: 5,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: '2',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  rememberText: {
    fontSize: 13
  },
  forgetText: {
    fontSize: 11,
    color: "red"
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  signup:{
    margin:'5px',
  },
  footerText:{
    marginRight:'5px'
  }

});
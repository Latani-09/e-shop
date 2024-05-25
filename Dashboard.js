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
  Image,
} from "react-native";

export default function Dashboard({navigation}) {
  return (
    <View >
       <Button
    title='Login'
    onPress={() => navigation.navigate('Login')}/>
      <View style={style.ctgSection}>
        <View style={style.flexCol}>
          <View style={style.ctg}>
            <Text>Groceries</Text>
          </View>
          <View style={style.ctg}>
          <Text>Groceries</Text>
          </View>
          <View style={style.ctg}>
          <Text>Clothings</Text>
          </View>
          <View style={style.ctg}>
          <Text>Electronics</Text>
          </View>
          <View style={style.ctg}>
          <Text>Accessories</Text>
          </View>
          <View style={style.ctg}>
          <Text>Others</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 10,
    bottom: 10,
    left: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "right",
    fontSize: "16px",
  },
  logo: { width: 150, height: 50, marginTop: 5, marginBottom: 5 },
  loginContainer: {
    marginRight:10,
  },
  ctgSection:{
   justifyContent:'center'
  },
  flexCol:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent1:'space-between'
  },
  ctg:{
    width:'30%',
    borderColor:'black',
    borderWidth:2,
    padding:10

  }
});

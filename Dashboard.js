import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button,Image } from "react-native";
import {groceries} from './assets/groceries.png';
import {homeware}  from './assets/homeware.png';
export default function Dashboard({ navigation }) {
  return (
    <View>
      <View style={style.navMenu}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={style.ctgSection}>
        <View style={style.flexCol}>
          <View style={style.ctg}>
            <Text>Groceries</Text>
            <Image source={require('./assets/groceries.png')} style={style.ctgImg}></Image>
          </View>
          <View style={style.ctg}>
            <Text>Home ware</Text>
            <Image source={require('./assets/homeware.png')} style={style.ctgImg}></Image>
          </View>
          <View style={style.ctg}>
            <Text>Clothings</Text>
            <Image source={require('./assets/cloths.png')} style={style.ctgImg}></Image>
          </View>
          <View style={style.ctg}>
            <Text>Electronics</Text>
            <Image source={require('./assets/electronics.png')} style={style.ctgImg}></Image>
          </View>
          <View style={style.ctg}>
            <Text>Vegetables</Text>
            <Image source={require('./assets/vegetables.png')} style={style.ctgImg}></Image>
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
    marginRight: 10,
  },
  navMenu: {
    marginRight: 5,
    marginLeft: "auto",
  },
  ctgSection: {
    flex:1,
    justifyContent:"space-evenly",
      },
  ctgImg:{
    width: 100,
    height:100,
    marginTop: 5, 
  marginBottom:5 
  },
  flexCol: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ctg: {
    width: "30%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    margin:10
  },
});

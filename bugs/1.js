import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center"
  },
  label: {
    textAlign: "center"
  }
});

/////
// Do not edit anything above this line
/////

const HomeScreen = props => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Contact Screen"
      onPress={() => {
        props.navigation.navigate("contactScreen");
      }}
    />
  </View>
);

const ContactScreen = props => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Screen</Text>
    <Button title="Go back" onPress={() => {
      props.navigation.navigate("homeScreen");
    }} />
  </View>
);

const AppNavigator = createStackNavigator(
  {
    homeScreen: HomeScreen,
    contactScreen: ContactScreen
  },
  {
    initialRouteName: "homeScreen"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen', { name: 'Jane' });
      }}
    />
  </View>
);

const InfoScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Contact Info</Text>
  </View>
);

const FriendsScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Friends</Text>
    <Button
      title="Go to Bob's Contact Screen"
      onPress={() => {
        navigation.push('ContactScreen', { name: 'Bob' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const ContactScreen = createBottomTabNavigator({
  InfoScreen,
  FriendsScreen,
});

const AppNavigator = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

//export default AppNavigator;
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

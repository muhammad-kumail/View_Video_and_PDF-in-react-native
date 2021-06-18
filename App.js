import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import Start from './start';
import PdfView from './pdfView';
import Playvideo from './playvideo';
import {
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name={'Home'} component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name={'Pdf'} component={PdfView} options={{ headerShown: false }}/>
        <Stack.Screen name={'Play Video'} component={Playvideo} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

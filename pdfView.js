
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef,useCallback} from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function PdfView({navigation, route}){
  //<WebView style={{marginTop:30,marginBottom:30,marginLeft:10,marginRight:10}} source={{uri: route.params.uri}} />

  const handlePress =()=>{
    const supported = Linking.canOpenURL(route.params.uri);
    //console.log(route.params);
    if (supported) {
      console.log(route.params.uri);
      Linking.openURL(route.params.uri);
    } else {
      Alert.alert("Don't know how to open this URL:",route.params.uri);
    }
  }
  return (
    console.log(route.params.uri),
    <View style={styles.container}>
    <Button title='Download' onPress={handlePress}/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
});
//console.log(route.params.uri),
// <View style={styles.container}>
// <Button title='Open' onPress={handlePress}/>
// </View>

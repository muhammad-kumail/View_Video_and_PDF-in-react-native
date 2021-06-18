
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Button,
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Start({navigation}){
  const vlink = {uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'};
  //require('./VID-20171108-WA0002.mp4');
  const pdflink= {uri:'https://docs.google.com/viewerng/viewer?url=https://www.learningcontainer.com/download/sample-pdf-download-10-mb/?wpdmdl%3D1569%26ind%3D0%26refresh%3D60addfd70c6d51622007767'};
  //require('./java_tutorial.pdf');
  //const pdflink= {uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'};
  return (
      <SafeAreaView style={styles.container}>

        <View style={{flex:1,width:'100%',backgroundColor:'red',justifyContent:'center',alignItems:'center',}}>
          <Text style={{fontSize:30,color:'white'}}> Academy Notes </Text>
        </View>

        <View style={{flex:9,width:'100%',backgroundColor:'#D8F4A1',justifyContent:'center',alignItems:'center'}}>
          <Button
            title="Pdf"
            onPress={() => navigation.navigate('Pdf',pdflink)}
            color='green'
          />
          <Text>{'\n'}</Text>
          <Button
            title="video"
            onPress={() => navigation.navigate('Play Video',vlink)}
            color='red'
          />

        </View>

      </SafeAreaView>
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

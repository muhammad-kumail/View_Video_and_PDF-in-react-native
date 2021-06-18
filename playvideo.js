
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
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
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Playvideo({navigation, route}){
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
      <View style={styles.container}>

        <Video
          ref={video}
          style={styles.video}
          source={route.params}
          useNativeControls
          resizeMode="contain"
          isLooping={false}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />

      </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:30,
  },
  video:{
    width:'100%',
    height:'100%',
    borderColor:'black',
    borderWidth: 2,
    borderRadius: 30,
    marginTop:20,
    marginBottom:20
  }
});

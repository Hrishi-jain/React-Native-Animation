/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import React, { useState,useRef} from 'react';
import {View, StyleSheet,Image, Text,TouchableOpacity,Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';

const FrontPage = () => {
  const [width,setwidht]=useState(100);
  const [height,setheight]=useState(100);
  const bounceValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Start the bounce animation
    Animated.sequence([
      Animated.spring(bounceValue, { toValue: 2, friction: 3, useNativeDriver: true }),
      Animated.spring(bounceValue, { toValue: 1, friction: 3, useNativeDriver: true })
    ]).start();
  };
  const route= useRoute();
  return (
    <View style={{marginTop:200,marginLeft:50}}>
      
      <TouchableOpacity onPress={handlePress}>
      <Animated.Image
        source={require('./assets/baloon.png')}
        style={{
          width: '80%',
          height: 200,

          resizeMode: 'contain',
          transform: [{ scale: bounceValue }]
        }}
      />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FrontPage;

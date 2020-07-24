import React, { useEffect, useState } from 'react'
import { View, Text,  StyleSheet,Image} from 'react-native'


export default function HeaderRes() {
    return (
        <Image style={styles.img} source={require('../assets/Medicliclogo.png')} />
    );
  }
  
  const styles = StyleSheet.create({
    img: {
        flex: 1,
        width:100,
        height:50
      },
  })
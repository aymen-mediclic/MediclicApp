import React from 'react';
import { View, StyleSheet, ActivityIndicator, ImageBackground, Text, ScrollView,TouchableOpacity } from 'react-native'
import * as Font from 'expo-font';
import Search from '../Components/Search'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class AccueilScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >

        <ImageBackground source={require('../assets/bgd1.jpg')} style={styles.image}>
          <Search />
         
        </ImageBackground>


        <View style={{ flexDirection: 'column',margin:8 }}>
          <Text style={{ fontWeight:'bold',fontSize:18,margin:8 }}>Mediclic </Text>
          <Text>Nous sommes une équipe de passionnés dont l'objectif est d'améliorer la vie de chacun à l'aide de produits innovants. Nous construisons des produits remarquables pour résoudre les problèmes de votre entreprise.

Nos articles sont conçus pour les petites et moyennes entreprises souhaitant optimiser leurs performances.</Text>
        </View>
        <View style={{ flexDirection: 'column',margin:8 }}>
        <Text style={{ fontWeight:'bold',fontSize:18,margin:8 }}>Rejoignez-nous </Text>
        <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons color='black' size={18} name={'phone'} />
          <Text>0601592898</Text>

          </View>
          <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons color='black' size={18} name={'email'} />
        <Text>contact@mediclic.info</Text>

          </View>
          
          
        </View>



      </ScrollView>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    //flex:1,
    backgroundColor:'white'
  },
  image: {
    //flex: 3,
    //width: '100%',
    height: 600,
    //justifyContent: "center",
    ///alignItems: "center",
  },

});
export default AccueilScreen
/*<Footer >
<FooterTab style={{backgroundColor:'white'}}>
<Text>Rejoignez-nous</Text>
<Text>Rejoignez-nous</Text>
<Text>Rejoignez-nous</Text>
</FooterTab>
</Footer>*/
/*import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AccueilScreen from '../Screens/AccueilScreen';
import ListMed from '../Screens/ListMed';
import AboutScreen from '../Screens/AboutScreen';
import ConnectionScreen from '../Screens/ConnectionScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';

const Drawer = createDrawerNavigator();
export default function AppDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Accueil" component={AccueilScreen} />
      <Drawer.Screen name="A propos" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();
function AppStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Mediclic" component={AppDrawer} />
      <Stack.Screen name="Recherche" component={ListMed} />
      <Stack.Screen name="Se connecter" component={ConnectionScreen} />
    </Stack.Navigator>
  );
}*/


/*
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import {createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import  ConnectionScreen from '../Screens/ConnectionScreen'
import  AccueilScreen from '../Screens/AccueilScreen'
import  AboutScreen from '../Screens/AboutScreen'
import  ListMed from '../Screens/ListMed'
import {TouchableOpacity,Text} from 'react-native';
import {MaterialIcons } from '@expo/vector-icons'


//import {Container,Header, Left, Icon, Content} from 'native-base' 

const AppDrawerNavigator = createDrawerNavigator({
    Accueil:{
      screen: AccueilScreen
      
    },
    SeConnecter: {
      screen:ConnectionScreen} ,
    Apropos : {
      screen: AboutScreen
    }, 
  });
  const AppStackNavigator = createStackNavigator({
   ///////Accueil/////////////////
    Mediclic:{ 
      screen : AppDrawerNavigator,
      navigationOptions:()=>({
        headerTintColor :'#fff',
        headerStyle :{
            backgroundColor:'#1E79C5',
            height: 80,
        },
        
        headerTitleStyle :{
          flex:1,
          fontSize: 24,
         },
        headerLeft:()=>
            <TouchableOpacity  style={{marginLeft:5}} onPress={(props)=>this.props.navigation.navigate('DrawerOpen') } >
                <MaterialIcons name='menu' size= {28} color={'white'}  />
            </TouchableOpacity>,
        headerRight:()=>
            <TouchableOpacity style={{marginRight:5}} onPress={()=>alert('This is a button!')} >
                <MaterialIcons name='accessibility' size= {28} color={'white'}   />
             </TouchableOpacity>
        /*header:()=>
         <Container >
             <Header>
                 <Left>
                     <Icon name='menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
                 </Left>
             </Header>
             <Content contentContainerStyle={{
                 flex:1,
                 alignItems:'center',
                 justifyContent:'center'
             }}>
                 <Text> Mediclic </Text>
             </Content>
         </Container>
        })},
   
   
   
   /////////Connecter Screen////////
    SeConnecter: {
      screen:AppDrawerNavigator
    } ,
    Apropos : {
      screen: AppDrawerNavigator
    },
    Recherche :{
      screen: ListMed
    },
    
});
  
  const AppNavigator= createAppContainer(AppStackNavigator)
  export default AppNavigator*/ 
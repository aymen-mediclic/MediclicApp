import React from 'react';
import { Image, AsyncStorage } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import AccueilScreen from './Screens/AccueilScreen';
import ListMed from './Screens/ListMed';
import AboutScreen from './Screens/AboutScreen';
import ConnectionScreen from './Screens/ConnectionScreen';
import MedProfilScreen from './Screens/MedProfilScreen';

import WebViewScreen from "./Screens/WebViewScreen"
import Fontisto from 'react-native-vector-icons/Fontisto';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,useNavigation,DrawerActions } from '@react-navigation/native';
import { navigationRef } from './Navigation/NavigationService';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, Text, Modal, View } from 'react-native';
import Calendar from './Components/Calendar';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import * as NavigationService from './Navigation/NavigationService';
import SearchScreen from './Screens/SearchBarScreen';
import RDV from './Screens/RdvScreen';
import CentreProfilScreen from './Screens/CentreProfilScreen';
import Inscription from './Screens/InscriptionScreen';
import En from 'react-native-vector-icons/Entypo';
import DateC from './Screens/DateConsultation';
import TypeC from './Components/TypeC';
import VilleC from './Screens/VilleConsultation';
import VilleC1 from './Screens/VilleC1';
import ShortCut from './Components/ShortCut'
import ChangeP from './Screens/ChangePosition';
import Web from './Screens/Web';
import {Root} from 'native-base'
import GProfMed from './Screens/GestProfMed';
import GProfPatient from './Screens/GestProfPatient';
import GProcheProfil from './Screens/PatProfil/GestProcheProfil';
import Pheader from './Screens/PatProfil/Pheader';
import { NavigationEvents } from 'react-navigation';
import SearchMed from './Components/SearchMed';
import SearchVille from './Components/SearchVille';
import SearchCtr from './Components/SearchCentre';
import MdpOub from './Screens/MdpOub';
import InscriptionProf from './Screens/InscriptionProf';
import HeaderRes from './Components/HeaderRes';
import Adresse2 from './Components/Adresse2';
import HeaderMc from './Components/HeaderMC';
import HeaderPat from './Screens/PatProfil/HeaderPat';
import InfirmierL from './Components/InfirmierListe';
import Motdpss from './Screens/Motdpss';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      // isUser: false
    }
  }
  componentDidMount() {
    // this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      NavigationService.navigate('Mon Profil:')
      
    }else{
      NavigationService.navigate('Se connecter')
    }
  }
  
  
  render() {
  //  console.log(this.state.isUser, "----------------------")
  const { navigation } = this.props;
    return (
      <Root>
      <NavigationContainer ref={navigationRef}>
        

        <Stack.Navigator >
          <Stack.Screen name="Mediclic" component={AppDraw}
            options={({ navigation }) =>({
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#1E79C5',
                height: 80,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
              headerTitleAlign: 'center',
              headerTitle: ()=> <HeaderRes/>,
              headerRight: () =>
                <TouchableOpacity style={{ padding: 10 }} onPress={this._loadInitialState} 
                >
                  <En name='user' size={22} color={'white'} />
                  {/*<FontAwesomeIcon icon='user' />*/}
                </TouchableOpacity>,
              headerLeft: () =>
                <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) }>
                  <MaterialIcons name='menu' size={28} color={'white'} />
                </TouchableOpacity>,
            }
             )}/>
          <Stack.Screen name="Résultat" component={ListMed} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
            headerTitle: ()=> <HeaderRes/>,
            headerRight: () =>
                <TouchableOpacity style={{ marginRight: 5 }} onPress={() => NavigationService.navigate('Mediclic')} >
                  <Fontisto color='white' size={20} name={'home'} style={{margin:5}} />
                </TouchableOpacity>,
          }} />
          <Stack.Screen name="Se connecter" component={ConnectionScreen} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="MedProfil" component={MedProfilScreen} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="CentreProfil" component={CentreProfilScreen} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Calendar" component={Calendar} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Rechercher" component={SearchScreen} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Validez votre rendez-vous" component={RDV} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerLeft: null,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Mot de passe oublié ?" component={Motdpss} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Formulaire d'inscription" component={Inscription} options={{
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Disponibilités" component={DateC} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Type de rendez-vous" component={TypeC} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Où ?" component={VilleC} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
          <Stack.Screen name="Choisisser la ville:" component={VilleC1} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Adresse du rendez-vous" component={ChangeP} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            }
          }} />
         
          <Stack.Screen name="Mon Profil" component={GProfMed} options={({ route }) =>({
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 100,
            },
           
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitle: ()=> <HeaderMc id={route.params.id} name={route.params.name} specialite={route.params.specialite} />
            //title:() =>{<Image style={{ height: 60, width: 100 }} source={require('./assets/Title.jpg')} />} 
          })} />

          <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerShown: false,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitleAlign: 'center',
          }} />

          <Stack.Screen name="Mon Profil:" component={GProfPatient} options={({ route,navigation }) =>({
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitle: ()=> <HeaderPat/>,
            headerRight: () =>
                <TouchableOpacity style={{ marginRight: 5 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
                  <MaterialIcons name='menu' size={25} color={'white'} />
                </TouchableOpacity>,
          })} />
           <Stack.Screen name="Proche Profil:" component={GProcheProfil} options={({ route,navigation }) =>({
             headerTintColor: '#fff',
             headerStyle: {
               backgroundColor: '#1E79C5',
               height: 80,
             },
             //headerTitleAlign: 'center',
             headerTitleStyle: {
               fontWeight: 'bold'
             },
            headerTitle: ()=> <Pheader/>,
            headerRight: () =>
                <TouchableOpacity style={{ marginRight: 5 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
                  <MaterialIcons name='menu' size={25} color={'white'} />
                </TouchableOpacity>
           })}
           />
           <Stack.Screen name="Choisir un professionnel" component={SearchMed} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
          }} />
          <Stack.Screen name="Choisir un centre" component={SearchCtr} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
          }} />
          <Stack.Screen name="Choisir une ville" component={SearchVille} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
          }} />
          <Stack.Screen name="Mot de passe oublié?" component={MdpOub} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
          }} />
          <Stack.Screen name="Seconde adresse" component={Adresse2} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
          }} />
          <Stack.Screen name="Choix Assistant" component={InfirmierL} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:18
            },
          }} />
          
        </Stack.Navigator>
      </NavigationContainer>

      </Root>
    );
  }
}


const AppDraw = ( {navigation}) =>

  <Drawer.Navigator>
    <Drawer.Screen name="Accueil" component={AccueilScreen} />
    <Drawer.Screen name="A propos" component={AboutScreen} />
  </Drawer.Navigator>





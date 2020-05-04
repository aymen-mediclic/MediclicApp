import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AccueilScreen from './Screens/AccueilScreen';
import ListMed from './Screens/ListMed';
import AboutScreen from './Screens/AboutScreen';
import ConnectionScreen from './Screens/ConnectionScreen';
import MedProfilScreen from './Screens/MedProfilScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './Navigation/NavigationService';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, Text, Modal, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Calendar from './Components/Calendar';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import * as NavigationService from './Navigation/NavigationService';
import SearchScreen from './Screens/SearchBarScreen';
import RDV from './Screens/RdvScreen';
import CentreProfilScreen from './Screens/CentreProfilScreen';
import Inscription from './Screens/InscriptionScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateC from './Screens/DateConsultation';
import TypeC from './Components/TypeC';
import VilleC from './Screens/VilleConsultation';
import VilleC1 from './Screens/VilleC1';
import ShortCut from './Components/ShortCut'
import ChangeP from './Screens/ChangePosition';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }
  render() {
    return (

      <NavigationContainer ref={navigationRef}>
        <Modal visible={this.state.modalOpen} animationType='slide' transparent={true}  >
          
          <View style={{ flexDirection: 'row', backgroundColor: '#1E79C5',marginTop:15 }}>
            <MaterialIcons color='white' name='close' size={20} onPress={() => this.setState({ modalOpen: false })} />
            <Text style={{ fontSize: 16, color: 'white' }}> Nouvelle recherche</Text>
          </View>
          <ShortCut />
         
        </Modal>

        <Stack.Navigator >
          <Stack.Screen name="Mediclic" component={AppDraw}
            options={{
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
              headerRight: () =>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => NavigationService.navigate('Se connecter')} >
                  <Icon name='user' size={20} color={'white'} />
                  {/*<FontAwesomeIcon icon='user' />*/}
                </TouchableOpacity>,
              headerLeft: () =>
                <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => NavigationService.navigate('Choisisser la ville')} >
                  <MaterialIcons name='menu' size={28} color={'white'} />
                </TouchableOpacity>,
            }
            } />
          <Stack.Screen name="Médecin" component={ListMed} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerLeft: () =>
              <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ modalOpen: true })} >
                <Icon name='search' size={20} color={'white'} />
              </TouchableOpacity>,
          }} />
          <Stack.Screen name="Se connecter" component={ConnectionScreen} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
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
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Prendre un rendez-vous" component={RDV} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Inscription" component={Inscription} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Date de rendez-vous" component={DateC} options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1E79C5',
              height: 80,
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} />
          <Stack.Screen name="Type de consultation" component={TypeC} options={{
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
          <Stack.Screen name="Choisisser la ville" component={VilleC} options={{
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
          <Stack.Screen name="Choisisser votre position" component={ChangeP} options={{
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
        </Stack.Navigator>
      </NavigationContainer>


    );
  }
}


const AppDraw = () =>

  <Drawer.Navigator>
    <Drawer.Screen name="Accueil" component={AccueilScreen} />
    <Drawer.Screen name="A propos" component={AboutScreen} />
    {/*<Drawer.Screen name="Liste" component={ListMed} />*/}
  </Drawer.Navigator>





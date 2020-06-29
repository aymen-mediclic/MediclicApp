import * as React from 'react';
import { Button, Text, View, StyleSheet, Picker,TouchableOpacity } from 'react-native';
import * as NavigationService from '../Navigation/NavigationService';

//import { Button } from "native-base";
export default class TypeC extends React.Component {
  state = {
    selectedValue: 'C'
  };
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Sélectionner un type de RDV :</Text>
        <View style={{flexDirection:'row'}}>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedValue}
          style={{ height: 50, width: '70%', marginBottom: 20 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
        >
          <Picker.Item label="Au cabinet/centre" value="C" />
          <Picker.Item label="A domicile" value="D" />
          <Picker.Item label="Video conférence" value="V" />
        </Picker>
        {this.state.selectedValue == 'C' && (
          <TouchableOpacity style={{backgroundColor:'#3498db',height:30,width:80,marginTop:7,borderRadius:5,alignItems:'center',justifyContent:'center'}} onPress={() => NavigationService.navigate('Rechercher', { choix: this.state.selectedValue })} >
            <Text style={{color:'white', fontWeight:'bold'}}>Suivant</Text>
            </TouchableOpacity>
        )}
        {this.state.selectedValue == 'D' && (
          <Button title='SUIVANT' onPress={() => NavigationService.navigate('Choisisser la ville:')} />
        )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  txt: {
    fontSize: 20,
    marginBottom: 5,
    //marginTop:80,
   
    
  }
});
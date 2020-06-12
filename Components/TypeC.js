import * as React from 'react';
import { Button, Text, View,Picker,StyleSheet} from 'react-native';
import * as NavigationService from '../Navigation/NavigationService';
export default class TypeC extends React.Component {
    state = {
        selectedValue:'c'
      };
      render() {
    
    return (
      <View style={styles.container}>
          <Text style={styles.txt}> Sélectionner un type de RDV :</Text>
        <Picker
          selectedValue={this.state.selectedValue}
          style={{ height: 50, width:'90%',marginBottom:20}}
          onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
        >
          <Picker.Item label="Au cabinet/centre" value="c" />
          <Picker.Item label="A domicile" value="d" />
          <Picker.Item label="Video conférence" value="v" />
        </Picker>
        {this.state.selectedValue =='c'&& (
        <Button title='Suivant' onPress={()=>NavigationService.navigate('Rechercher',{choix: this.state.selectedValue})} />
        )}
        {this.state.selectedValue =='d'&& (
        <Button title='Suivant' onPress={()=>NavigationService.navigate('Choisisser la ville:')} />
        )}
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: "center",
      //justifyContent:'center'
    },
    txt:{
        fontSize:20,
        marginBottom:50,
        marginTop:80,
        color:'#1E79C5',
        fontFamily:''
    }
  });
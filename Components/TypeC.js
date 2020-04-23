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
          <Text style={styles.txt}> Sélectionner un type de RDV</Text>
        <Picker
          selectedValue={this.state.selectedValue}
          style={{ height: 50, width: 200,marginTop:10,marginBottom:250 }}
          onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
        >
          <Picker.Item label="Au cabinet/centre" value="c" />
          <Picker.Item label="A domicile" value="d" />
          <Picker.Item label="Video conférence" value="v" />
        </Picker>
        <Button title='Suivant' onPress={()=>NavigationService.navigate('Rechercher')} />
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    },
    txt:{
        fontSize:18
    }
  });
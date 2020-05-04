import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, TextInput,Picker } from 'react-native'
import * as NavigationService from '../Navigation/NavigationService';



export default class ShortCut extends React.Component {
    state = {

        selectedValue: 'c'
    };
    functionOne(itemValue){
        this.setState({selectedValue:itemValue})
        
        }
        
        functionTwo(){
            NavigationService.navigate('Choisisser votre position')   
        }
    render() {
        return (

            <View style={styles.ctr}>
                
                    <Picker

                        selectedValue={this.state.selectedValue}
                        style={{ height: 40,color:'white',margin:10}}
                        onValueChange={(itemValue, itemIndex) =>  { this.functionOne(itemValue); this.functionTwo(); }}
                    >
                        <Picker.Item label="au Cabinet/Centre" value='c' />
                        <Picker.Item label="Domicile" value='d' />
                    </Picker>
                    {/*<Text style={styles.txt}>au Cabinet/Centre</Text>*/}
                
                <Text style={styles.txt}>Cardiologue</Text>
                <Text style={styles.txt}>Casablanca</Text>
                <Text style={styles.txt1}>consultation ou service</Text>
                <Text style={styles.txt1}>Quelle service aimeriez vous?</Text>
                <Text style={styles.txt1}>Médecin ou centre?</Text>
                <Text style={styles.txt1}>Disponibilité</Text>
                <Button title='rechecher' color='orange' onPress={() => { }} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    ctr: {
        flex: 1,
        //marginTop:20,
        backgroundColor: '#1E79C5',
        marginBottom: 110,
    },
    txt: {
        backgroundColor: '#fff',
        height: 40,
        color: 'grey',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 30

    },
    txt1: {
        backgroundColor: '#fff',
        height: 40,
        color: 'red',
        margin: 10,
        borderRadius: 5,
        paddingLeft: 30

    }
}
)
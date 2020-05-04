import React from 'react'
import {View,Picker} from 'react-native'
export default class Pick extends React.Component{
    state = {
        
        selectedValue:'c'
      };
    render(){
    return(
<View>
<Picker
            
                     selectedValue={this.state.selectedValue}
                     style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
                    >
                <Picker.Item label="au Cabinet/Centre" value='c'/>
                <Picker.Item label="Domicile" value='d'/>
                </Picker>
 </View>
    )}
}
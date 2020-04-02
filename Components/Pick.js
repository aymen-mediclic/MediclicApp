import React from 'react'
import {View,Picker} from 'react-native'
export default class Pick extends React.Component{
    state = {
        
        selectedValue:'p'
      };
    render(){
    return(
<View>
<Picker
            
                     selectedValue={this.state.selectedValue}
                     style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
                    >
                <Picker.Item label="Choix 1" value='p'/>
                <Picker.Item label="choix 2" value='s'/>
                <Picker.Item label="Choix 3" value='o'/>
                </Picker>
 </View>
    )}
}
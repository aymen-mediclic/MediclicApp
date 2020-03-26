import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    value: 'first',
  };

  render() {
    return(
      <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <View style={{flexDirection:'row'}}>
          <View style={{marginRight:30}}>
            <Text>Pour vous</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text>Pour un Proche</Text>
            <RadioButton value="second" />
          </View>
        </View>
      </RadioButton.Group>
    )
  }
}

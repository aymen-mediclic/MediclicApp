import * as React from 'react';
import { Button, Image, View,Picker} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton, Text } from 'react-native-paper';
import {CameraRoll} from 'react-native-cameraroll';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    value: 'first',
    selectedValue:'p'
  };

  render() {
    let { image,value } = this.state;
    return (
      <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <View>
        <Text style={{fontWeight:'bold',fontSize:16}}>Pour qui vous prenez rendez-vous:</Text>
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
          {value =='second'&& (
            <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
          >
            <Picker.Item label="Parent" value='p'/>
            <Picker.Item label="Soeur" value='s'/>
            <Picker.Item label="Oncle" value='o'/>
          </Picker>
          )}
        
        </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      
        <Button
          color='grey'
          title="Importer une image"
          onPress={this._pickImage}
        />
        <View style={{marginTop:5}}>
          <Button
            color='grey'
            title="Prendre une Image"
            onPress={this._takePhoto}
          />
        </View>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      </RadioButton.Group>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  _takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowEditing: false,
      exif: true
    });
  
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    CameraRoll.saveToCameraRoll(this.state.image);
  };
}

/*import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
//import * as ImagePicker from 'expo-image-picker';
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
}*/

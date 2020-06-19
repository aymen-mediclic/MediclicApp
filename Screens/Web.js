/*import * as React from 'react';
import { Button, Image, View, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
//import { RadioButton, Text } from 'react-native-paper';
import { CameraRoll } from 'react-native-cameraroll';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Video } from 'expo-av';
export default class Web extends React.Component {
    state = {
        image: null,

    };

    render() {
        let { image, value } = this.state;
        return (


            <View style={{ flex: 1, alignItems: 'center' }}>
                
                
                <Video
                    source={require('../assets/w2.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: "100%", height: 250 }}
                />
                <Image source={require('../assets/w3.jpg')} style={{ width:"100%", height: 250 }} />
                {/*<Image source={require('../assets/w.jpg')} style={{ width: 250, height: 250,flex:1 }} />
                {image &&
                    <Image source={{ uri: image }} style={{ width: 250, height: 250, flex: 1 }} />}
                <View style={{ margin: 10, flexDirection: "row" }}>


                    <Icon
                        name='phone'
                        size={24}
                        color='green'
                        onPress={this._pickImage}//"Importer une image"
                        style={{ marginRight: 100 }}
                    />
                    <Icon
                        name='microphone-slash'
                        size={24}
                        color='black'
                        onPress={this._takePhoto}//"Prendre une Image"
                        style={{ marginRight: 100 }}
                    />
                    <Icon
                        name='phone-slash'
                        size={24}
                        color='red'
                        onPress={()=>{}}//"Prendre une Image"
                    />
                </View>

            </View>

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
/*<Text style={{ width: 250, height: 250,backgroundColor:'black',marginBottom:15}}></Text> */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { url1,url2 } from '../Navigation/GlobalUrl';

// ...
export default class WebViewScreen extends Component {
render() {
    return <WebView source={{ uri: url2+'/accueiltest?type=sport' }} />;
}
}
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class WebViewScreen extends Component {
render() {
    return <WebView source={{ uri: 'http://51.91.249.185:8069/web?db=new_installation#action=91&active_id=mailbox_inbox&menu_id=74' }} />;
}
}
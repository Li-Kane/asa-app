import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import MainStyle from '../styles/MainStyle';
import React, {useEffect} from 'react';
import ProfileComponent from '../components/ProfileComponent';
import { BackHandler } from 'react-native';

function ProfileScreen({navigation}) {
    useEffect(() => {
        const backAction = () => {
            navigation.navigate('Menu');
            return true;
        };

        // Add the backAction handler when the component mounts
        BackHandler.addEventListener('hardwareBackPress', backAction);
        // Remove the backAction handler when the component unmounts
        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, [navigation]);

    return(
      <View style={MainStyle.container}>
        <ProfileComponent />
        <Text>Profile!</Text>
      </View>
    );
}

export default ProfileScreen;
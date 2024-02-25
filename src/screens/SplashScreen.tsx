import {  Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import { Navigation, NavigationProps } from 'react-native-navigation'
import { HomeRoot } from '../navigation'
import { Image, StyleSheet, View } from 'react-native'

const SplashScreen = (props: NavigationProps) => {
    useEffect(() => {
        setTimeout(() => {
            Navigation.setRoot(HomeRoot)
        }, 1000)
    })
    return (
        <View style={styles.containerStyle}>
        <View style={styles.imageContainerStyle}>
            <Image style={styles.imageStyle} resizeMode='center' source={require('../assets/stock_logo.jpeg')}/>
            <Text variant='titleLarge'  style={{marginTop:14}}>Stock Tracker</Text>
        </View>
        <Text variant='titleSmall'  style={{marginVertical:14,alignSelf:'center'}}>Made with love by swapnil ❤️</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'white'
    },
    imageContainerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:260,
        height:160
    }
});

export default SplashScreen
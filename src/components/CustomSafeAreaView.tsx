import React, { useState, useEffect } from 'react'
import { View, Dimensions, Platform } from 'react-native'
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets'

export default function CustomSafeAreaView(props: any): React.JSX.Element {
    const [insets, setInsets] = useState({
        bottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
        top: StaticSafeAreaInsets.safeAreaInsetsTop
    })

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', () => {
            StaticSafeAreaInsets.getSafeAreaInsets((values) => {
                const isIOS = Platform.OS === 'ios'
                setInsets({
                    bottom: isIOS ? values.safeAreaInsetsBottom : 0,
                    top: isIOS ? values.safeAreaInsetsTop : 0,
                })
            })
        })

        return () => {
            subscription.remove()
        }
    })

    return (
        <View
            {...props}
            style={{
                ...props.style,
                flex: 1,
                marginBottom: insets.bottom,
                marginTop: insets.top
            }}
        >
            {props.children}
        </View>
    )
}
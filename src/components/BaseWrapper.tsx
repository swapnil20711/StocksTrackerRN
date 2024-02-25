import React from 'react'
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import CustomSafeAreaView from './CustomSafeAreaView'
const BaseWrapper = (Component: any): any => {
    // eslint-disable-next-line react/display-name
    return (props: any): React.JSX.Element => {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}>
                    <StatusBar barStyle={'light-content'} />
                    <CustomSafeAreaView>
                        <Component {...props} />
                    </CustomSafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

export default BaseWrapper
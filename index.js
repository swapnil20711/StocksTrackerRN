/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import { SplashRoot } from './src/navigation';
import { Screens } from './src/screens';
import BaseWrapper from './src/components/BaseWrapper';

Screens.forEach((ScreenComponent, key) =>
    Navigation.registerComponent(
        key,
        () => BaseWrapper(ScreenComponent)
    )
)
Navigation.events().registerAppLaunchedListener(() => {
    void Navigation.setRoot(SplashRoot)
})
Navigation.setDefaultOptions({
    topBar: {
        visible: false
    },
    animations: {
        setRoot: {
            waitForRender: true
        },
        push: {
            waitForRender: true
        }
    }
})
import AddStockScreen from "./AddStockScreen"
import HomeScreen from "./HomeScreen"
import SplashScreen from "./SplashScreen"

export const SPLASH_SCREEN = 'Splash'
export const LOGIN_SCREEN = 'Login'
export const HOME_SCREEN = 'Home'
export const ADD_STOCK_SCREEN = 'AddStock'


export const Screens = new Map()
Screens.set(HOME_SCREEN, HomeScreen)
Screens.set(SPLASH_SCREEN, SplashScreen)
Screens.set(ADD_STOCK_SCREEN, AddStockScreen)

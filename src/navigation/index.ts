import { HOME_SCREEN, SPLASH_SCREEN } from '../screens'

export const SplashRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: SPLASH_SCREEN,
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }
            ]
        }
    }
}
export const HomeRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: HOME_SCREEN,
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }
            ]
        }
    }
}



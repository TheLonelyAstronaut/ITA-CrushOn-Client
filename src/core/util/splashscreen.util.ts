import RNBootSplash from "react-native-bootsplash";

class Splashscreen {
    hide() {
        RNBootSplash.hide({fade: true});
    }
}

export const splashscreen = new Splashscreen();
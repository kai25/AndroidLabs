import {Dimensions} from "react-native";

export function getScreenResolution() {
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;

    return {
        height: deviceHeight,
        width: deviceWidth,
    }
}

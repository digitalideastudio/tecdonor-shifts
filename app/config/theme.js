import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const fonts = {
    $commonFontFamily: Platform.select({
        ios: 'Helvetica',
        android: 'sans-serif'
    }),
    $monoFontFamily: Platform.select({
        ios: 'Courier',
        android: 'monospace'
    }),
};

export const colors = {
    $bgPrimary: '#FDFFFB',
    $bgSecondary: '#FEFFFE',
    $firmColor1: '#5BBF52',
    $firmColor2: '#FFAF46',
    $color: '#000',
    $colorOnDark: '#fff',
    $pageTitleColor: '#7D8BA1',
    $placeholderColor: '#C4C4C4',
    $borderColor: '#DDDFE4',
};

export const input = {
    $inputText: colors.$color,
    $inputBorderColor: colors.$borderColor,
    $inputBorderWidth: 2,
    $inputBorderRadius: 7,
    $inputFontSize: 16
};

export const theme = {
    ...colors,
    ...input,
    ...fonts
};

EStyleSheet.build({ ...theme });

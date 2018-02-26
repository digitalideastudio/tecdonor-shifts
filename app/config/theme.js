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
    $h1FontSize: 48,
    $h1LineHeight: 58,
    $h3FontSize: 24,
    $h3LineHeight: 29,
    $pFontSize: 16,
    $pLineHeight: 16
};

export const colors = {
    $bgPrimary: '#FDFFFB',
    $bgPrimaryLight: '#FEFFFE',
    $bgSecondary: '#FEFFFE',
    $firmColor1: '#5BBF52',
    $firmColor2: '#FFAF46',
    $color: '#000',
    $colorTitle: '#505050',
    $colorOnDark: '#fff',
    $colorOnDark2: '#D3D3D3',
    $pageTitleColor: '#7D8BA1',
    $placeholderColor: '#C4C4C4',
    $borderColor: '#DDDFE4',
};

export const block = {
    $blockBorderWidth: 2,
    $blockBorderColor: colors.$borderColor,
    $blockBorderRadius: 7
};

export const input = {
    $inputText: colors.$color,
    $inputBorderColor: colors.$borderColor,
    $inputBorderWidth: block.$blockBorderWidth,
    $inputBorderRadius: block.$blockBorderRadius,
    $inputFontSize: 16
};

export const textShadow = {
    shadowColor: colors.$color,
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowOpacity: .5,
    shadowRadius: 1
};

export const theme = {
    ...colors,
    ...block,
    ...input,
    ...fonts,
};

EStyleSheet.build({ ...theme });

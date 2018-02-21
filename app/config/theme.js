import EStyleSheet from 'react-native-extended-stylesheet';

export const colors = {
    bgPrimary: '#FDFFFB',
    bgSecondary: '#FEFFFE',
    firmColor1: '#5BBF52',
    firmColor2: '#FFAF46',
    color: '#000',
    pageTitleColor: '#7D8BA1',
    placeholderColor: '#C4C4C4',
    borderColor: '#DDDFE4'
};

EStyleSheet.build({
    ...colors
});

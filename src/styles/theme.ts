import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#924EE9', // Cor principal (para botões, etc.)
    accent: '#FF5722', // Cor secundária (para destaque, etc.)
    background: '#f5f5f5', // Cor de fundo
    surface: '#ffffff', // Cor de superfície
    text: '#1e1e1e', // Cor do texto
    placeholder: '#6b7280', // Cor do placeholder
  },
  fonts: {
    regular: 'Roboto',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
};

export default theme




 import { Theme } from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

const theme: MD3Theme = {
  ...MD3LightTheme, // Baseie-se no tema claro MD3
  colors: {
    ...MD3LightTheme.colors, // Mantenha as cores padrão
    primary: '#98ff98',      // Substitua a cor primária
    secondary: '#003366',    // Substitua a cor secundária
    background: '#f5f5f5',   // Cor de fundo
    surface: '#ffffff',      // Cor da superfície
    //text: '#000000',         // Cor do texto
    // Adicione outras cores conforme necessário
  },
  // Outras personalizações se necessário
  roundness: 4,
  fonts: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '700',
    },
  /* fonts: {
    regular: 'Roboto',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  }, */
}
}

export default theme




/* import { MD3LightTheme, DefaultTheme} from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export const theme: ThemeProp = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#98ff98',//'#924EE9', // Cor principal (para botões, etc.)
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

export const { primary, accent, background, surface, text, placeholder } = theme.colors

export default theme */
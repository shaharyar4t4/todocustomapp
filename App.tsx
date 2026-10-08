import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './src/features/auth/screen/LoginScreen';

function App() {

  return (
    <SafeAreaProvider>
      <LoginScreen/>
    </SafeAreaProvider> 
  );
}

export default App;

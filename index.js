import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('to_do_app', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('to_do_app', { rootTag });
}

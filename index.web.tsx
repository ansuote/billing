/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import appJson = require('./app.json')

AppRegistry.registerComponent(appJson.name, () => App);
AppRegistry.runApplication(appJson.name, { rootTag: document.getElementById('react-root') });


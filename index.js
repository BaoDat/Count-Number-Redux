import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './App';
//Components
import MainComponent from './App';
import DetailComponent from './src/DetailComponent';
import ThirdComponent from './src/ThirdComponent';
//Screen names
import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';

// const AllScreen = createStackNavigator({    
//     MainScreen: {
//         screen: MainComponent,
//         navigationOptions: {
//             headerTitle: 'Main',
//         },
//     },
//     DetailScreen: {
//         screen: DetailComponent,
//         navigationOptions: {
//             headerTitle: 'Detail',
//         },
//     },
//     ThirdScreen: {
//         screen: ThirdComponent,
//         navigationOptions: {
//             headerTitle: 'Third',
//         },
//     },
// });
AppRegistry.registerComponent('NumberRedux', () => App);

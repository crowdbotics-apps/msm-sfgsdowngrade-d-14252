import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313557Navigator from '../features/BlankScreen313557/navigator';
import BlankScreen213555Navigator from '../features/BlankScreen213555/navigator';
import BlankScreen113554Navigator from '../features/BlankScreen113554/navigator';
import BlankScreen013549Navigator from '../features/BlankScreen013549/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313557: { screen: BlankScreen313557Navigator },
BlankScreen213555: { screen: BlankScreen213555Navigator },
BlankScreen113554: { screen: BlankScreen113554Navigator },
BlankScreen013549: { screen: BlankScreen013549Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

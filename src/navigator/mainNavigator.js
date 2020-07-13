import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen88814Navigator from '../features/BlankScreen88814/navigator';
import EmailAuth18813Navigator from '../features/EmailAuth18813/navigator';
import BlankScreen78812Navigator from '../features/BlankScreen78812/navigator';
import CalendarView28811Navigator from '../features/CalendarView28811/navigator';
import BlankScreen68810Navigator from '../features/BlankScreen68810/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen88814: { screen: BlankScreen88814Navigator },
EmailAuth18813: { screen: EmailAuth18813Navigator },
BlankScreen78812: { screen: BlankScreen78812Navigator },
CalendarView28811: { screen: CalendarView28811Navigator },
BlankScreen68810: { screen: BlankScreen68810Navigator },

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

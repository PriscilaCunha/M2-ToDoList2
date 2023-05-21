import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings/Settings';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
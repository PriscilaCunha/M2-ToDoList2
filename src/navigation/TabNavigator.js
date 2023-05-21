import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoListNavigator from './TodoListNavigator';
import ShopListNavigator from './ShopListNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TodoListNavigator" component={TodoListNavigator} />
            <Tab.Screen name="ShopListNavigator" component={ShopListNavigator} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
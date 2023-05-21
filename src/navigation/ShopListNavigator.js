import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopList from '../screens/ShopList/ShopList';
import ShopForm from '../screens/ShopForm/ShopForm';

const Stack = createNativeStackNavigator();

const ShopListNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ShopList" component={ShopList} />
            <Stack.Screen name="ShopForm" component={ShopForm} />
        </Stack.Navigator>
    );
}

export default ShopListNavigator;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from '../screens/TodoList/TodoList';
import TodoForm from '../screens/TodoForm/TodoForm';

const Stack = createNativeStackNavigator();

const TodoListNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TodoList" component={TodoList} />
            <Stack.Screen name="TodoForm" component={TodoForm} />
        </Stack.Navigator>
    );
}

export default TodoListNavigator;
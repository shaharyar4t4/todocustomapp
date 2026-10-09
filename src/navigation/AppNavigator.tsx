import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from '../features/dashbored/screen/TodoScreen';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={TodoScreen}
                options={{ title: 'My Todos' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;

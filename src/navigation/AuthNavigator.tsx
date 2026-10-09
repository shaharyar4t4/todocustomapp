import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/auth/screen/LoginScreen';
import { LoginFormValues } from '../features/auth/type/AuthTypes';
import { AuthStackParamList } from './types';

interface AuthNavigatorProps {
    onLogin: (values: LoginFormValues) => void;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = ({ onLogin }: AuthNavigatorProps) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login">
                {() => <LoginScreen onLogin={onLogin} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export type { AuthNavigatorProps };
export default AuthNavigator;

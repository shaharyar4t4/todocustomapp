import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { LoginFormValues } from '../features/auth/type/AuthTypes';

const RootNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (_values: LoginFormValues) => {
        // Replace this with the login API call when the backend is connected.
        setIsAuthenticated(true);
    };

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <AppNavigator />
            ) : (
                <AuthNavigator onLogin={handleLogin} />
            )}
        </NavigationContainer>
    );
};

export default RootNavigator;

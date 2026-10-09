import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../../../core/color/AppColor';
import AppScreenPadding from '../../../core/components/padding/AppScreenPadding';
import SemiboldFontStyle from '../../../core/components/fontStyle/SemiboldFontStyle';
import { Strings } from '../../../core/constant/AppString';
import LoginForm from '../components/LoginForm';
import { LoginFormValues } from '../type/AuthTypes';

interface LoginScreenProps {
    onLogin?: (values: LoginFormValues) => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
    return (
        <AppScreenPadding style={styles.container}>
            <View style={styles.miniContainer}>
                <Text style={styles.heading}>{Strings.login.logintxt}</Text>
            </View>
            <LoginForm onSubmit={onLogin} />
        </AppScreenPadding>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.background,
    },
    miniContainer: {
        backgroundColor: Color.primary,
        flex: 0.3,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        ...SemiboldFontStyle,
        color: Color.background,
        fontSize: 20,
    },
});

export type { LoginScreenProps };
export default LoginScreen;

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../../../core/components/button/AppButton';
import AppTextField from '../../../core/components/textfield/AppTextField';
import { Strings } from '../../../core/constant/AppString';
import { LoginFormErrors, LoginFormValues } from '../type/AuthTypes';
import {
    validateEmail,
    validateLoginForm,
    validatePassword,
} from '../utils/LoginValidation';

interface LoginFormProps {
    onSubmit?: (values: LoginFormValues) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<LoginFormErrors>({});

    const handleEmailChange = (value: string) => {
        setEmail(value);

        if (errors.email) {
            setErrors(previous => ({
                ...previous,
                email: validateEmail(value),
            }));
        }
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);

        if (errors.password) {
            setErrors(previous => ({
                ...previous,
                password: validatePassword(value),
            }));
        }
    };

    const handleSubmit = () => {
        const values = { email, password };
        const nextErrors = validateLoginForm(values);

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length === 0) {
            onSubmit?.(values);
        }
    };

    return (
        <View style={styles.container}>
            <AppTextField
                label={Strings.login.loginEmailLabel}
                placeholder={Strings.login.loginEmailReq}
                value={email}
                onChangeText={handleEmailChange}
                onBlur={() =>
                    setErrors(previous => ({
                        ...previous,
                        email: validateEmail(email),
                    }))
                }
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                error={errors.email}
            />

            <AppTextField
                label={Strings.login.loginPasswordLabel}
                placeholder={Strings.login.loginPasswordReq}
                value={password}
                onChangeText={handlePasswordChange}
                onBlur={() =>
                    setErrors(previous => ({
                        ...previous,
                        password: validatePassword(password),
                    }))
                }
                secureTextEntry
                error={errors.password}
            />

            <AppButton title={Strings.login.loginButton} onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        gap: 16,
        alignContent: 'center'
    },
});

export type { LoginFormProps };
export { LoginForm };
export default LoginForm;

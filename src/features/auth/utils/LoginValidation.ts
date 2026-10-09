import { Strings } from '../../../core/constant/AppString';
import { LoginFormErrors, LoginFormValues } from '../type/AuthTypes';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
        return Strings.login.loginEmailReq;
    }

    if (!emailPattern.test(email.trim())) {
        return Strings.login.loginEmailError;
    }

    return undefined;
};

export const validatePassword = (password: string): string | undefined => {
    if (!password.trim()) {
        return Strings.login.loginPasswordReq;
    }

    if (password.length < 6) {
        return Strings.login.loginPasswordError;
    }

    return undefined;
};

export const validateLoginForm = ({
    email,
    password,
}: LoginFormValues): LoginFormErrors => {
    const errors: LoginFormErrors = {};
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
        errors.email = emailError;
    }

    if (passwordError) {
        errors.password = passwordError;
    }

    return errors;
};

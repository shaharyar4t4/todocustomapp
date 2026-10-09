import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';
import { Color } from '../../color/AppColor';
import MediumFontStyle from '../fontStyle/MediumFontStyle';
import RegularFontStyle from '../fontStyle/RegularFontStyle';

interface AppTextFieldProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const AppTextField = ({
    label,
    error,
    style,
    placeholderTextColor = Color.textSecondary,
    containerStyle,
    ...rest
}: AppTextFieldProps) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {label ? <Text style={styles.label}>{label}</Text> : null}

            <TextInput
                style={[styles.input, error ? styles.errorInput : null, style]}
                placeholderTextColor={placeholderTextColor}
                {...rest}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10
    },

    label: {
        ...MediumFontStyle,
        fontSize: 14,
        color: Color.textPrimary,
        marginBottom: 6,
    },

    input: {
        ...RegularFontStyle,
        borderWidth: 1,
        borderColor: Color.border,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 16,
        color: Color.textPrimary,
    },

    errorInput: {
        borderColor: Color.danger,
    },

    errorText: {
        ...RegularFontStyle,
        color: Color.danger,
        fontSize: 12,
        marginTop: 4,
    },
});

export type { AppTextFieldProps };
export { AppTextField };
export default AppTextField;

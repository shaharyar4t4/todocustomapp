import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import { Color } from '../../color/AppColor';
import SemiboldFontStyle from '../fontStyle/SemiboldFontStyle';

interface AppButtonProps extends TouchableOpacityProps {
    title: string;
    loading?: boolean;
}

const AppButton = ({
    title,
    loading = false,
    disabled = false,
    style,
    ...rest
}: AppButtonProps) => {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            disabled={isDisabled}
            accessibilityRole="button"
            accessibilityState={{ disabled: isDisabled, busy: loading }}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color={Color.background} />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.primary,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        ...SemiboldFontStyle,
        color: Color.background,
        fontSize: 16,
    },
});

export type { AppButtonProps };
export { AppButton };
export default AppButton;

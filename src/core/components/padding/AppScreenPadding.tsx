import React, { ReactNode } from 'react';
import {
    StyleProp,
    StyleSheet,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';

interface AppScreenPaddingProps extends ViewProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const AppScreenPadding = ({
    children,
    style,
    ...rest
}: AppScreenPaddingProps) => {
    return (
        <View style={[styles.container, style]} {...rest}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export type { AppScreenPaddingProps };
export { AppScreenPadding };
export default AppScreenPadding;

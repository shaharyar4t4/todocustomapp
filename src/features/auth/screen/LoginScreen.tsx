import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../../../core/color/AppColor';
import AppScreenPadding from '../../../core/components/padding/AppScreenPadding';
import SemiboldFontStyle from '../../../core/components/fontStyle/SemiboldFontStyle';
import { Strings } from '../../../core/constant/AppString';

const LoginScreen = () => {
    return (
        <AppScreenPadding style={{ backgroundColor: Color.background }}>
            <View style={styles.miniContainer}>
                <Text style={styles.heading}>{Strings.login.logintxt}</Text>
            </View>
        </AppScreenPadding>
    );
};

const styles = StyleSheet.create({
    miniContainer: {
        backgroundColor: Color.primary,
        flex: .2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        ...SemiboldFontStyle,
        color: 'white',
        fontSize: 16,

    },
});

export default LoginScreen;

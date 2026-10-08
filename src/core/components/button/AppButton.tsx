import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
}

const Button = ({ title, onPress, loading = false, disabled = false }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color='#fff' />
            ) : (
                <Text style={styles.txt}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#4F46E5',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Button;
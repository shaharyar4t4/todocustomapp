import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View, } from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

const Input = ({ label, error, ...rest }: InputProps) => {
    return (
        <View style={styles.container}>
            {
                label &&
                <Text style={styles.label}>
                    {label}
                </Text>
            }

            <TextInput
                style={[styles.input, error && styles.errorInput]}
                placeholderTextColor='#999'
                {...rest}
            />

            {
                error &&
                <Text style={styles.errorInput}>
                    {error}
                </Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    label: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
    },

    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 16,
        color: '#000'
    },

    errorInput: {
        borderColor: 'red',
    },

    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },

});
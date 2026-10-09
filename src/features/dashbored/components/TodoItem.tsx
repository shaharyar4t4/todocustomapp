import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Color } from '../../../core/color/AppColor';
import MediumFontStyle from '../../../core/components/fontStyle/MediumFontStyle';
import RegularFontStyle from '../../../core/components/fontStyle/RegularFontStyle';
import { Todo } from '../type/todoType';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
}

const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                todo.completed ? styles.completedContainer : null,
                pressed ? styles.pressed : null,
            ]}
            onPress={() => onToggle(todo.id)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: todo.completed }}
        >
            <View
                style={[styles.checkbox, todo.completed ? styles.checked : null]}
            >
                {todo.completed ? <Text style={styles.checkmark}>✓</Text> : null}
            </View>

            <View style={styles.content}>
                <Text style={[styles.title, todo.completed ? styles.completedText : null]}>
                    {todo.title}
                </Text>
                <Text style={styles.description}>{todo.description}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.surface,
        borderColor: Color.border,
        borderRadius: 12,
        borderWidth: 1,
        padding: 14,
        marginBottom: 12,
    },
    completedContainer: {
        opacity: 0.7,
    },
    pressed: {
        opacity: 0.5,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderColor: Color.primary,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    checked: {
        backgroundColor: Color.primary,
    },
    checkmark: {
        color: Color.background,
        fontSize: 14,
    },
    content: {
        flex: 1,
    },
    title: {
        ...MediumFontStyle,
        color: Color.textPrimary,
        fontSize: 15,
    },
    completedText: {
        textDecorationLine: 'line-through',
    },
    description: {
        ...RegularFontStyle,
        color: Color.textSecondary,
        fontSize: 12,
        marginTop: 4,
    },
});

export type { TodoItemProps };
export { TodoItem };
export default TodoItem;

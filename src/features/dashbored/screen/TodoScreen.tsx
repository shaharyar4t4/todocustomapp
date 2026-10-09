import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { Color } from '../../../core/color/AppColor';
import AppScreenPadding from '../../../core/components/padding/AppScreenPadding';
import RegularFontStyle from '../../../core/components/fontStyle/RegularFontStyle';
import SemiboldFontStyle from '../../../core/components/fontStyle/SemiboldFontStyle';
import TodoItem from '../components/TodoItem';
import { useTodoStore } from '../store/TodoStore';
import { Strings } from '../../../core/constant/AppString';

const TodoScreen = () => {
    const todos = useTodoStore(state => state.todos);
    const toggleTodo = useTodoStore(state => state.toggleTodo);

    return (
        <AppScreenPadding style={styles.container}>
            <Text style={styles.title}>{Strings.dashbored.dashboredTitle}</Text>
            <Text style={styles.subtitle}>{Strings.dashbored.dashboreddescription}</Text>

            <FlatList
                data={todos}
                keyExtractor={todo => todo.id}
                renderItem={({ item }) => (
                    <TodoItem todo={item} onToggle={toggleTodo} />
                )}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </AppScreenPadding>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.background,
    },
    title: {
        ...SemiboldFontStyle,
        color: Color.textPrimary,
        fontSize: 24,
    },
    subtitle: {
        ...RegularFontStyle,
        color: Color.textSecondary,
        fontSize: 14,
        marginTop: 8,
    },
    list: {
        marginTop: 24,
    },
    listContent: {
        paddingBottom: 20,
    },
});

export default TodoScreen;

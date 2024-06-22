import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeCompleteStatus, decrement } from "../redux/reducers";

export default function List() {
    const todolist = useSelector((state) => state.counter.listItem);
    const dispatch = useDispatch();
    function pressHandle(index) {
        dispatch(changeCompleteStatus(index));
    }

    function longPressHandle(index) {
        Alert.alert(
            "通知",
            "你是否要删除这一条待办事项",
            [
                {
                    text: "取消",
                    onPress: () => console.log("取消删除"),
                    style: "cancel"
                },
                {
                    text: "删除", onPress: () => {
                        dispatch(decrement(index));
                    }
                }
            ]
        );
    }

    const items = todolist.map((item, index) => {
        return (
            <View key={index} style={styles.item}>
                {item.isCompleted ?
                    <TouchableWithoutFeedback
                        onPress={() => pressHandle(index)}
                        onLongPress={() => longPressHandle(index)}
                    >
                        <Text style={styles.complete}>{item.title}</Text>
                    </TouchableWithoutFeedback>
                    :
                    <TouchableWithoutFeedback
                        onPress={() => pressHandle(index)}
                        onLongPress={() => longPressHandle(index)}
                    >
                        <Text>{item.title}</Text>
                    </TouchableWithoutFeedback>
                }
            </View>
        )
    })
    return (
        <View style={styles.container}>
            {items}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    item: {
        padding: 10,
        marginBottom: 10,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        width: 300,
    },
    complete: {
        textDecorationLine: "line-through",
    }
})
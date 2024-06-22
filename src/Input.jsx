import { StyleSheet, TextInput, View, Button } from "react-native";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { increment } from "../redux/reducers";
export default function Input() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    function pressHandle() {
        // 将输入的内容添加到状态数组中
        dispatch(increment(inputValue));
        setInputValue("");
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What needs to be done?"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <Button title="添加" onPress={pressHandle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: "row",
        padding: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    input: {
        width: 300,
        backgroundColor: "#FFF",
        height: 40,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#DDD",
    },
})
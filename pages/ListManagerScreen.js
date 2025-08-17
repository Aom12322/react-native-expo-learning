import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

const ListManagerScreen = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const addItem = () => {
        if (input.trim() !== "") {
            setItems([...items, input]);
            setInput("");
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Item"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Add Item" onPress={addItem} />

            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.itemText}>{item}</Text>
                        <Button
                            title="Remove"
                            onPress={() => removeItem(index)}
                            color="red"
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        marginTop: 50,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    itemText: {
        fontSize: 16,
    },
});

export default ListManagerScreen;
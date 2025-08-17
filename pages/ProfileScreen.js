import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>อนวัช หวังสมบูรณ์ดี ทธด.102</Text>
      <Text></Text>
      <Button title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Text></Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Text></Text>
      <Button title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Text></Text>
      <Button title="Go to List Manager"
        onPress={() => navigation.navigate("ListManager")}
      />
      <Text></Text>
      <Button title="Go to FlexboxManager"
        onPress={() => navigation.navigate("FlexboxManager")}
      />
      <Text></Text>
      <Button title="Go to StyleExample"
        onPress={() => navigation.navigate("StyleExample")}
      />
      <Text></Text>
      <Button title="Go to LayoutExampleScreen"
        onPress={() => navigation.navigate("LayoutExampleScreen")}
      />
    </View>
  );
}
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import Form from "../components/form";
const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF0CE" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FFC436" },
          headerShadowVisible: false,
          headerLeft: () => <Text> Good morning Tony!</Text>,
          headerRight: () => (
            <Image
              source={require("../icons/bell.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Text>Home</Text>
      <Form></Form>
    </SafeAreaView>
  );
};

export default Home;

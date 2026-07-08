import { router, useFocusEffect } from "expo-router";
import { Text } from "react-native";

export default function Index() {
    // Redirect to tabs screen
    useFocusEffect(() => {
        router.replace('/(tabs)/home');
    });

    return (
        <Text>Redirecting to home.tsx</Text>
    )

}
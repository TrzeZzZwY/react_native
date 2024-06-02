import { Link, router } from "expo-router"
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native"

const HomePage = () => {

    return(
      <View>
        <Text>Hello Mobile World</Text>
        <Pressable onPress={() => router.push(`/users`)}>
            <Text>Click here</Text>
        </Pressable>
      </View>
    ) 
}

export default HomePage
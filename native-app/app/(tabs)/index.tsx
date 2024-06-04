import { Link, router } from "expo-router"
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native"

const HomePage = () => {

    return(
      <View style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:10
      }}>
        <Text style={{
          fontSize:20,
          fontFamily:""
        }}>Hello Mobile World</Text>
        <Pressable onPress={() => router.push(`/users`)} style={{
          backgroundColor: "#ebcbae",
          borderWidth:2,
          borderRadius:8,
          padding:16
        }}>
            <Text style={
            {
                textAlign: "center",
                fontFamily:""
            }
        }>Click here!</Text>
        </Pressable>
      </View>
    ) 
}

export default HomePage
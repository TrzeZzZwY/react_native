import { Link, router } from "expo-router"
import { View, Text, Pressable, StyleProp, ViewStyle, ScrollView, TextStyle } from "react-native"
import { FC, useState, useEffect } from 'react';
import { GetAllUsers } from "../../../requests/UserService";
import { User } from "../../../types/User";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
    const [users, setUsers] = useState<User[] | null>();

    useEffect(() => {
        GetAllUsers()
        .then(users => setUsers(users))
    },[]);

    const rowStyle: StyleProp<ViewStyle> = {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        gap: 15,
        backgroundColor: "#eaf6f6",
        marginHorizontal: 20,
        marginTop: 10,
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius:20
    }
    const rowHeadStyle: StyleProp<ViewStyle> = {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        gap: 15,
        backgroundColor: "#66bfbf",
        marginHorizontal: 20,
        marginTop: 10,
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius:20
    }
    const textStyle: StyleProp<TextStyle> = {
          fontFamily:""
        }
    return(
        <ScrollView contentContainerStyle={
            {
                display: "flex",
                gap:10,
                flexDirection: "column"
            }
        }>
            <View style={rowHeadStyle}>
                <Text style={textStyle}>Id</Text>
                <Text style={textStyle}>Username</Text>
                <Text style={textStyle}>Email</Text>
            </View>
            {
                users?.map(e => 
                    <Pressable onPress={() => router.push(`/users/${e.id}`)} key={e.id} style={rowStyle}>
                        <Text style={textStyle}>{e.id}</Text>
                        <Text style={textStyle}>{e.username}</Text>
                        <Text style={textStyle}>{e.email}</Text>
                    </Pressable>
                )
            } 
        </ScrollView>
    ) 
}

export default HomePage
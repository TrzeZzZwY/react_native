import { Link, router } from "expo-router"
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native"
import { FC, useState, useEffect } from 'react';
import { GetAllUsers } from "../../../requests/UserService";
import { User } from "../../../types/User";

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
    return(
        <View style={
            {
                display: "flex",
                gap:10,
                flexDirection: "column"
            }
        }>
            <View style={rowHeadStyle}>
                <Text>Id</Text>
                <Text>Username</Text>
                <Text>Email</Text>
            </View>
            {
                users?.map(e => 
                    <Pressable onPress={() => router.push(`/users/${e.id}`)} key={e.id} style={rowStyle}>
                        <Text>{e.id}</Text>
                        <Text>{e.username}</Text>
                        <Text>{e.email}</Text>
                    </Pressable>
                )
            }
        
        </View>
    ) 
}

export default HomePage
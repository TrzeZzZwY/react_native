import { Link, router } from "expo-router"
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native"
import { FC, useState, useEffect } from 'react';
import { GetAllUsers } from "../../requests/UserService";
import { User } from "../../types/User";

const HomePage = () => {
    const [users, setUsers] = useState<User[] | null>();

    useEffect(() => {
        GetAllUsers()
        .then(users => setUsers(users))
    },[]);

    const rowStyle: StyleProp<ViewStyle> = {
        flex:1,
        flexDirection: "row",
        paddingLeft: 10,
    }
    return(
        <View style={
            {
                flex: 1,
                flexDirection: "column"
            }
        }>
            <View style={rowStyle}>
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
import { Stack, Tabs } from "expo-router"

const TabsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"  options={
                {
                    headerTitle: "Home Page",
                    title: "Home"
                }
                }/>
            <Stack.Screen name="users/index" options={
                {
                    headerTitle: "Users",
                    title: "Users"
                }
                }/>
            <Stack.Screen name="users/[userId]" options={
                {
                    headerTitle: "User Page",
                }
                }/>
            <Stack.Screen name="todos/[userId]" options={
                {
                    headerTitle: "Todos Page",
                }
                }/>
            <Stack.Screen name="albums/[albumId]" options={
                {
                    headerTitle: "Album Page",
                }
                }/>
            <Stack.Screen name="albums/index"  options={
                {
                    headerTitle: "All Albums",
                }
                }/>
            <Stack.Screen name="posts/[postId]"  options={
                {
                    headerTitle: "Post Page",
                }
                }/>
        </Stack>
    );
};

export default TabsLayout;
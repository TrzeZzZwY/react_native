import { Tabs } from "expo-router"

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index"  options={
                {
                    headerTitle: "Home Page",
                    title: "Home"
                }
                }/>
            <Tabs.Screen name="users/index"  options={
                {
                    headerTitle: "Users",
                    title: "Users"
                }
                }/>
            <Tabs.Screen name="users/[userId]" options={
                {
                    headerTitle: "User Page",
                    href:null
                }
                }/>
            <Tabs.Screen name="albums/[albumId]" options={
                {
                    headerTitle: "album id Page",
                    href:null
                }
                }/>
            <Tabs.Screen name="albums/index"  options={
                {
                    headerTitle: "albums Page",
                    href:null
                }
                }/>
        </Tabs>
    );
};

export default TabsLayout;
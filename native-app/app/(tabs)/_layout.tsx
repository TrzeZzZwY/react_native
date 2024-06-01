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
            <Tabs.Screen name="users/[id]" options={
                {
                    headerTitle: "Home Page",
                    title: "Home"
                }
                }/>
        </Tabs>
    );
};

export default TabsLayout;
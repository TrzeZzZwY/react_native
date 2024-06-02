import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native"
import { FC, useState, useEffect } from "react";
import { Album } from "../../../types/Album";
import { GetAlbumsForUserId } from "../../../requests/AlbumService";
import { AlbumTile } from "../../../components/common/AlbumTile";

const AlbumsPage = () => {
    const {userId} = useLocalSearchParams()
    const [albums, setAlbums] = useState<Album[] | null>();

    useEffect(()=>{
        GetAlbumsForUserId(Number(userId))
        .then(albums => setAlbums(albums));

        console.log(userId)
    },[]);

    const rowStyle: StyleProp<ViewStyle> = {
        flex:1,
        flexDirection: "row",
        paddingLeft: 10,
    }

    return (
        <View style={
            {
                flex: 1,
                flexDirection: "column"
            }
        }>
            <Text>Albums Page</Text>
            {
                albums?.map(e =>
                        <Pressable onPress={() => router.push(`/albums/${e.id}`)} key={e.id} style={rowStyle}>
                            <AlbumTile album={e}/>
                        </Pressable>
                    )
            }
        </View>
    )
}

export default AlbumsPage;
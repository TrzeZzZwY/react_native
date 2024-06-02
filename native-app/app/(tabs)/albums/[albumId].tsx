import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native"
import { FC, useState, useEffect } from "react";
import { Photo } from "../../../types/Photo";
import { GetPhotosForAlbumId } from "../../../requests/AlbumService";
import { PhotoTile } from "../../../components/common/PhotoTile";

const AlbumPage = () => {
    const {albumId} = useLocalSearchParams()
    const [photos, setPhotos] = useState<Photo[] | null>();

    useEffect(()=>{
        GetPhotosForAlbumId(Number(albumId))
        .then(photos =>{
            photos = photos.map(e => {
                let thumb = e.thumbnailUrl.replace("https","http");
                return {id: e.id, albumId: e.albumId, title: e.title, url: e.url, thumbnailUrl: thumb}
            })
            setPhotos(photos)
        })
    },[])

    console.dir(photos);
    return (
       <View style={
        {
            flex:1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
        }
       }>
         {photos?.map(photo =>
                <PhotoTile photo={photo} key={photo.id}/>
                )}
       </View>
    )
}

export default AlbumPage;
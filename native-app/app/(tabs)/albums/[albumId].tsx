import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, StyleProp, ViewStyle, FlatList, ScrollView } from "react-native"
import { FC, useState, useEffect } from "react";
import { Photo } from "../../../types/Photo";
import { GetPhotosForAlbumId } from "../../../requests/AlbumService";
import { PhotoTile } from "../../../components/common/PhotoTile";

const AlbumPage = () => {
    const {albumId} = useLocalSearchParams()
    const [photos, setPhotos] = useState<Photo[] | null>();

    useEffect(()=>{
        GetPhotosForAlbumId(Number(albumId))
        .then(photos =>setPhotos(photos))
    },[])

    console.dir(photos);
    return (
       <ScrollView  contentContainerStyle={
        {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            padding:30
        }
       }>
         {photos?.map(photo =>
                <PhotoTile photo={photo} key={photo.id}/>
                )}
       </ScrollView>
    )
}

export default AlbumPage;
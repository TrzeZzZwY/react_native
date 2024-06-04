import { FC } from 'react';
import { View, Text, Image, StyleProp, ViewStyle } from "react-native"
import { Photo } from "../../types/Photo"

interface IProps {
    photo: Photo
}

export const PhotoTile: FC<IProps> = props => {
    return (
            <View style=
            {
                {
                    padding: 7,
                    margin: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5,
                    borderWidth: 2,
                    borderRadius:5,
                    width: "90%"
                }
            }>
                <Image style={{width:150, height:150}} source={{uri: props.photo.thumbnailUrl}} alt="photo" />
                <Text style={
                    {
                        fontSize: 20,
                    }
                }>{props.photo.title}</Text>
            </View>
    )
} 
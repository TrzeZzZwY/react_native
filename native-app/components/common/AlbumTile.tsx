import { FC } from 'react';
import { Album } from "../../types/Album"
import { View, Text} from "react-native"

interface IProps {
    album: Album
}
export const AlbumTile: FC<IProps> = props => {
    return (
        <View style={{
            width:200,
            height:200,
            backgroundColor: "red"
        }}>
            <Text>{props.album.title}</Text>
        </View>
    )
} 
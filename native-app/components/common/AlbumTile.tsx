import { FC } from 'react';
import { Album } from "../../types/Album"
import { View, Text} from "react-native"

interface IProps {
    album: Album
}
export const AlbumTile: FC<IProps> = props => {
    return (
        <View style={{
            width:"90%",
            height:100,
            backgroundColor: "#ebcbae",
            padding:20,
            borderWidth:2,
            borderRadius:5
        }}>
            <Text>{"Album title: "+ props.album.title.toUpperCase()}</Text>
        </View>
    )
} 
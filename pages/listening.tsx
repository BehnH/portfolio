import { ContainerBlock } from "../components/Base";
import { MostRecent, NowPlaying, TopTracks } from "../components/Spotify";

export default function Page() {
    return (
        <>
            <ContainerBlock>
                <NowPlaying />
                <MostRecent />
                <TopTracks />
            </ContainerBlock>
        </>
    )
}
import { ContainerBlock } from "../components/Base";
import { MostRecent, NowPlaying, TopTracks } from "../components/Spotify";

export default function Page() {
    return (
        <>
            <ContainerBlock
                title={"Behn Hayhoe | Listening History"}
                description={"Check out what I've been listening to on Spotify."}
            >
                <NowPlaying />
                <MostRecent />
                <TopTracks />
            </ContainerBlock>
        </>
    )
}
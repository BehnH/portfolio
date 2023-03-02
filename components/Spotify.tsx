import useSWR from 'swr'

type Track = {
    album_artwork: string;
    songUrl: string;
    title: string;
    artist: string;
    ranking?: number;
    playing?: boolean;
};

export function NowPlaying() {
    const { data } = useSWR('https://spotify-workers.waitrosedev.workers.dev/spotify/nowplaying', (apiUrl: string) => fetch(apiUrl).then(res => res.json()));
    if (!data) return null;

    return (
        <>
            {data !== null && data.playing && (
                <>
                    <div className="max-w-6xl mx-auto h-48 bg-white mb-6">
                        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                            Now Playing
                        </h1>
                    </div>
                    <div className='grid grid-cols-1 max-w-xl mx-auto gap-y-5 py-8'>
                        <CurrentTrack {...data} />
                    </div>
                </>
            )}
        </>
    )
}

export function MostRecent() {
    const { data, error } = useSWR('https://spotify-workers.waitrosedev.workers.dev/spotify/recent', (apiUrl: string) => fetch(apiUrl).then(res => res.json()));
    if (error) return <p>Failed to load</p>

    return (
        <>
            <div className="max-w-6xl mx-auto h-48 bg-white mb-6">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                    Recently Played
                </h1>
            </div>
            <div className='grid md:grid-cols-2 grid-rows-10 max-w-3xl mx-auto gap-y-5 py-8'>
                {data?.length && data.map((track: Track, index: number) => (
                    <TrackItem ranking={index + 1} key={track.songUrl} {...track} />
                ))}
            </div>
        </>
    )
}

export function TopTracks() {
    const { data, error } = useSWR('https://spotify-workers.waitrosedev.workers.dev/spotify/top', (apiUrl: string) => fetch(apiUrl).then(res => res.json()));
    if (!data) return <p>Loading...</p>
    if (error) return <p>Failed to load</p>

    return (
        <>
            <div className="max-w-6xl mx-auto h-48 bg-white mb-6">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left underline decoration-[#bbf7d0] decoration-wavy decoration-4">
                    Top Tracks
                </h1>
            </div>
            <div className='grid grid-cols-2 grid-rows-10 max-w-3xl mx-auto gap-y-5 py-8'>
                {data?.length && data.map((track: Track, index: number) => (
                    <TrackItem ranking={index + 1} key={track.songUrl} {...track} />
                ))}
            </div>
        </>
    )
}

function TrackItem(track: Track) {
    return (
        <div className="relative border p-4 rounded-md shadow-xl bg-white z-10 mx-4 border-[#1DB954]">
            <p className="text-sm font-bold text-gray-400">
                {track.ranking}
            </p>
            <div className="flex flex-col pl-3">
                <a
                    className="font-medium text-gray-900 truncate w-64 md:w-full break-words"
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {track.title}
                </a>
                <p
                    className="text-gray-500 mb-4 truncate w-64 md:w-full"
                    color="gray.500"
                >
                    {track.artist}
                </p>
            </div>
        </div>
    )
}

function CurrentTrack(track: Track) {
    return (
        <div className="relative border p-4 rounded-md shadow-xl bg-white z-10 mx-4 border-[#1DB954]">
            <div className="flex pl-3">
                {/* eslint-disable-next-line @next/next/no-img-element */ }
                <img className="h-24 w-24" src={track.album_artwork} alt="Current track artwork" />
                <div className="flex flex-col justify-center ml-4">
                    <a
                        href={track.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="font-medium text-gray-900 truncate w- sm:w-80 md:w-80">{track.title}</p>
                    </a>
                    <p
                        className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
                        color="gray.500"
                    >
                        {track.artist}
                    </p></div>
            </div>
        </div>
    )
}
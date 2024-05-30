import React, { useEffect, useRef, useState } from 'react'
import './music.css'

function MusicPlayer() {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);

    const tracks = [
        {
            title: "Track 1",
            source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            image: "https://static.vecteezy.com/system/resources/previews/021/693/323/non_2x/a-logo-for-a-music-company-that-is-made-by-song-brand-vector.jpg",
        },
        {
            title: "Track 2",
            source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            image: "https://assets.teenvogue.com/photos/64a5ba095699418416716eba/1:1/w_3962,h_3962,c_limit/1474272248",
        },
    ];

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setTrackProgress(
                    (audioRef.current.currentTime / audioRef.current.duration) * 100
                )
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    function handlePauseAndPlay() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

    function handleSkipTrack(getDirection) {
        if (getDirection === 'forward') {
            setCurrentMusicTrack(prevTrack => (prevTrack + 1) % tracks.length);
        } else if (getDirection === 'backward') {
            setCurrentMusicTrack(prevTrack => (prevTrack - 1 + tracks.length) % tracks.length);
        }

        setTrackProgress(0);
    }

    return (
        <div className='music-player'>
            <h1>Music Player</h1>
            <h2>{tracks[currentMusicTrack].title}</h2>
            <img src={tracks[currentMusicTrack].image} alt={tracks[currentMusicTrack].title} />
            <audio ref={audioRef} src={tracks[currentMusicTrack].source}></audio>
            <div className='progress-bar'>
                <div className='progress'
                    style={{ width: `${trackProgress}%`, background: isPlaying ? '#3498db' : '#a43636', height: '10px' }}>
                </div>
            </div>
            <div className="track-controls">
                <button onClick={() => handleSkipTrack('backward')}>Previous</button>
                <button onClick={handlePauseAndPlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={() => handleSkipTrack('forward')}>Next</button>
            </div>
        </div>

    )
}

export default MusicPlayer
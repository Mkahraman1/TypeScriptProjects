import { useState } from 'react';
import { Box, Typography, Stack, IconButton, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const playlist = [
    { title: "Sonne", artist: "Rammstein", album: "Mutter" },
    { title: "Master of Puppets", artist: "Metallica", album: "Master of Puppets" },
    { title: "Hangar 18", artist: "Megadeth", album: "Rust in Peace" },
    { title: "Du Hast", artist: "Rammstein", album: "Sehnsucht" },
];

export default function MusicPlayer() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === playlist.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
    };

    const currentSong = playlist[currentIndex];

    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#2a2a2a', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
                Vibe Köşesi (Müzik Çalar)
            </Typography>

            <Paper sx={{ p: 3, backgroundColor: '#1e1e1e', color: 'white', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
                    {currentSong.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
                    {currentSong.artist} - {currentSong.album}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={handlePrev}>
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton color="primary" sx={{ backgroundColor: 'rgba(211, 47, 47, 0.1)' }} size="large">
                        <PlayArrowIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleNext}>
                        <SkipNextIcon />
                    </IconButton>
                </Stack>
            </Paper>
        </Box>
    );
}
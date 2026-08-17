import { Box, Typography, Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Pomodoro() {

    const [timeLeft, setTimeLeft] = useState(1500)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(1500);
    };

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    return (
        <Box sx={{ textAlign: 'center', p: 3, backgroundColor: '#2a2a2a', borderRadius: 2 }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
                {minutes}:{seconds}
            </Typography>

            <Stack direction="row" spacing={2} sx={{justifyContent:'center'}}>
                <Button
                    variant="contained"
                    color={isActive ? "warning" : "success"}
                    size="large"
                    onClick={toggleTimer}
                >
                    {isActive ? "Duraklat" : "Başla"}
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    onClick={resetTimer}
                >
                    Sıfırla
                </Button>
            </Stack>
        </Box>
    );
}
import { Box, Typography, Container } from '@mui/material';
import Pomodoro from './components/Pomodoro';
import TaskBoard from './components/TaskBoard';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, color: '#d32f2f' }}>
          Vibe & Focus
        </Typography>
        <Box sx={{ backgroundColor: '#1e1e1e', p: 3, borderRadius: 2 }}>
          <Pomodoro />
          <TaskBoard />
          <MusicPlayer />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
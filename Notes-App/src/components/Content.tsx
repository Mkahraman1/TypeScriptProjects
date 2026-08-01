import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

type Task = {
  id: number
  text: string
}

function Content() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])


  function taskEkle() {
    if (taskText.trim() === "") {
      return
    }
    const yeniGorev: Task = {
      id: Date.now(),
      text: taskText
    }
    setTasks([...tasks, yeniGorev])
    setTaskText("")
  }

  function taskSil(id: number) {
    const filtrelenmisTodo = tasks.filter((task) => task.id !== id)
    setTasks(filtrelenmisTodo)
  }

  function formGonder(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  taskEkle()
}


  return (
    <Container>
      <Typography
        variant="h2"
        color="primary"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Task Manager
      </Typography>

      <form onSubmit={formGonder}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            mt: 2,
          }}
        >
          <TextField
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            label="Görev"
            variant="filled"
            size="small"
          />

          <Button type="submit" variant="contained">
            Ekle
          </Button>
        </Stack>
      </form>

      {tasks.length === 0 ? (<Typography sx={{ mt: 4 }} variant="h6" color="error" align="center">Görev Listesi Boş</Typography>) : (<Stack spacing={2} sx={{ mt: 4 }}>
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  {task.text}
                </Typography>

                <Button onClick={() => taskSil(task.id)} variant="contained" color="error">
                  Sil
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>)}


    </Container>
  );
}

export default Content;
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



type Note = {
    id: number
    title: string
    content: string
}


function Notes() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [notes, setNotes] = useState<Note[]>([])

    function notEkle(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (title.trim() === "" || content.trim() === "") {
            return
        }
        const yeniNote: Note = {
            id: Date.now(),
            title: title,
            content: content,
        }
        setNotes([...notes, yeniNote]);
        setTitle("")
        setContent("")
    }

    function notSil(id:number){
      const filtrelenmisNote = notes.filter((note)=>note.id !== id)
      setNotes(filtrelenmisNote)
    }


    return (

        <Container>
            <form onSubmit={notEkle}>
                <Stack direction="row"
                    spacing={4}
                    sx={{
                        justifyContent: "center",
                        mt: 2,
                    }}>
                    <TextField
                        required
                        label="Başlık"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                        required
                        label="İçerik"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        multiline
                        rows={4}
                    />
                </Stack>
                <Stack sx={{ mt: 2 }}>
                    <Button type="submit" variant="contained">
                        Not Ekle
                    </Button>
                </Stack>
            </form>

            {notes.length === 0 ? (<Typography sx={{ mt: 2, textAlign: 'center' }} gutterBottom variant="h5" component="div">
                Gösterilcek içerik yok
            </Typography>) : (
                <Stack spacing={2} sx={{ mt: 3 }}>
                    {notes.map((note) => {
                        return (
                            <Card key={note.id}>
                                <CardContent>
                                    <Stack direction="row" sx={{
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {note.title}
                                        </Typography>
                                        <Button onClick={()=>notSil(note.id)} color="error" variant="outlined">
                                            Sil
                                        </Button>
                                    </Stack>

                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {note.content}
                                    </Typography>
                                </CardContent>

                            </Card>
                        )
                    })}
                </Stack>
            )}

        </Container>
    )
}

export default Notes

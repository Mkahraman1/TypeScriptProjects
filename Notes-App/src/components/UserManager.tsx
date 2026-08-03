import { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

type User = {
    id: number
    name: string
    email: string
}

function UserManager() {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [text, setText] = useState("")

    const [duzenlenenId, setDuzenlenenId] = useState<number | null>(null)
    const [duzenlenenName, setDuzenlenenName] = useState("")
    const [duzenlenenEmail, setDuzenlenenEmail] = useState("")


    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data: User[] = await response.json()
                setUsers(data)
            } catch (error) {
                setError("Bir hata oluştu")
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    }, [])

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()))

    function userSil(id: number) {
        const newList = users.filter((user) => user.id !== id)
        setUsers(newList)
    }

    function Kaydet() {
        if (
            duzenlenenName.trim() === "" ||
            duzenlenenEmail.trim() === ""
        ) {
            return
        }
        const newList = users.map((user) => {
            if (duzenlenenId === user.id) {
                return {
                    ...user,
                    name: String(duzenlenenName),
                    email: String(duzenlenenEmail),
                }
            }
            return user
        })
        setUsers(newList)
        setDuzenlenenName("")
        setDuzenlenenEmail("")
        setDuzenlenenId(null)
    }

    if (loading) {
        return (
            <Typography align="center" variant="h6" color="secondary" sx={{ fontWeight: "bold", mt: 4 }}>Yükleniyor...</Typography>
        )
    }

    if (error) {
        return (
            <Typography align="center" color="error" sx={{ fontWeight: "bold", mt: 4 }}>{error}</Typography>
        )
    }

    return (
        <Container maxWidth="sm">
            <Stack>
                <Typography align="center" sx={{ fontWeight: "bold" }} variant="h5" gutterBottom>
                    USER MANAGER
                </Typography>
                <TextField value={text} onChange={(e) => setText(e.target.value)} id="standard-basic" label="Kullanici Ara..." variant="standard" />
                <Stack spacing={3} sx={{ mt: 4 }}>

                    {filteredUsers.map((user) => (
                        <Card key={user.id}>
                            {user.id === duzenlenenId ?
                                (
                                    <Stack spacing={2}>
                                        <TextField value={duzenlenenName} onChange={(e) => setDuzenlenenName(e.target.value)} id="standard-basic" label="İsim Değiştir" variant="standard" />

                                        <TextField value={duzenlenenEmail} onChange={(e) => setDuzenlenenEmail(e.target.value)} id="standard-basic" label="Email Değiştir" variant="standard" />

                                        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                            <Button onClick={Kaydet} color="success">Kaydet</Button>
                                            <Button onClick={() => setDuzenlenenId(null)} color="info">Geri Dön</Button>
                                        </Stack>
                                    </Stack>
                                ) : (
                                    <>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {user.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {user.email}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "space-between" }}>
                                            <Button size="small"
                                                onClick={() => {
                                                    setDuzenlenenName(user.name)
                                                    setDuzenlenenEmail(user.email)
                                                    setDuzenlenenId(user.id)
                                                }}
                                            >
                                                Düzenle
                                            </Button>

                                            <Button onClick={() => userSil(user.id)} size="small" color="error">
                                                Sil
                                            </Button>
                                        </CardActions>
                                    </>
                                )}

                        </Card>
                    ))}
                </Stack>
            </Stack>
        </Container>
    )
}

export default UserManager

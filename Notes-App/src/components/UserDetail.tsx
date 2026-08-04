import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../services/userService"
import { useEffect, useState } from "react"
import type { User } from "../types/user"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";



function UserDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const kullaniciGetir = async () => {
            try {
                const data = await getUserById(Number(id))
                setUser(data)
            } catch (error) {
                setError("Bir hata olustu.")
            } finally {
                setLoading(false)
            }
        }
        kullaniciGetir()
    }, [id])

    if (loading) {
        return (
            <Typography align="center" variant="subtitle1" gutterBottom>
                Yükleniyor...
            </Typography>
        )
    }

    if (error) {
        return (
            <Typography align="center" variant="subtitle1" gutterBottom>
                {error}
            </Typography>
        )
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Card
                sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                        }}
                    >
                        {user?.name}
                    </Typography>

                    <Stack spacing={1.5}>
                        <Typography variant="body1">
                            <strong>E-posta:</strong> {user?.email}
                        </Typography>

                        <Typography variant="body1">
                            <strong>Telefon:</strong> {user?.phone}
                        </Typography>
                    </Stack>

                    <Button
                        variant="outlined"
                        onClick={() => navigate("/")}
                        sx={{ mt: 4 }}
                    >
                        Geri Dön
                    </Button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default UserDetail

import { useEffect, useState } from "react"
import type { User } from "../types/user"
import { getUsers } from "../services/userService"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";


function Users() {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                setError("Bir hata meydana geldi");
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

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
        <Container maxWidth="lg">
            <Stack direction="row" spacing={2} useFlexGap sx={{
                mt: 3,
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {users.map((user) => (
                    <Card key={user.id} sx={{ width: 250 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                {user.email}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {user.phone}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>navigate(`/users/${user.id}`)} size="small">Detaya Git</Button>
                        </CardActions>
                    </Card>
                ))}
            </Stack>
        </Container>
    )
}

export default Users

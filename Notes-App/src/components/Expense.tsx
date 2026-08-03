import { useState } from "react"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';





type Expense = {
    id: number
    title: string
    amount: number
    type: "income" | "expense"
}

function Expense() {

    const [title, setTitle] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [type, setType] = useState<"income" | "expense">("income")
    const [expenses, setExpenses] = useState<Expense[]>([])

    function expenseEkle() {
        if (amount.trim() === "" || title.trim() === "") {
            return
        }
        const yeniExpense: Expense = {
            id: Date.now(),
            title,
            amount: Number(amount),
            type,
        }
        setExpenses([...expenses, yeniExpense])
        setTitle("")
        setAmount("")
        setType("income")
    }

    const totalIncome = expenses.reduce((total, expense) => {
        if (expense.type === "income") {
            total += expense.amount
        }
        return total
    }, 0)

    const totalExpense = expenses.reduce((total, expense) => {
        if (expense.type === "expense") {
            total += expense.amount
        }
        return total
    }, 0)

    const balance = totalIncome - totalExpense

    return (
        <div>
            <Container maxWidth="sm">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ mt: 3, mb: 4 }}
                >
                    Gelir - Gider
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                    <Card sx={{ flex: 1 }}>
                        <CardContent>
                            <Typography color="text.secondary">
                                Toplam Gelir
                            </Typography>

                            <Typography variant="h6" color="success.main">
                                {totalIncome} TL
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ flex: 1 }}>
                        <CardContent>
                            <Typography color="text.secondary">
                                Toplam Gider
                            </Typography>

                            <Typography variant="h6" color="error.main">
                                {totalExpense} TL
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ flex: 1 }}>
                        <CardContent>
                            <Typography color="text.secondary">
                                Bakiye
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: balance >= 0 ? "success.main" : "error.main",
                                }}
                            >
                                {balance} TL
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>

                <Stack spacing={3}>
                    <TextField
                        label="Başlık"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <TextField
                        label="Tutar"
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="type-label">
                            Tür
                        </InputLabel>

                        <Select
                            labelId="type-label"
                            value={type}
                            label="Tür"
                            onChange={(event) =>
                                setType(event.target.value as "income" | "expense")
                            }
                        >
                            <MenuItem value="income">
                                Gelir
                            </MenuItem>

                            <MenuItem value="expense">
                                Gider
                            </MenuItem>
                        </Select>
                        <Button sx={{ mt: 3 }} onClick={expenseEkle} variant="outlined">İşlem Ekle</Button>
                    </FormControl>
                </Stack>
                {expenses.length === 0 ? (<Typography sx={{ textAlign: 'center', color: 'green' }}>Henüz işlem eklenmedi.</Typography>) :
                    (
                        <Stack spacing={2} sx={{ mt: 4 }}>
                            {expenses.map((expense) => (
                                <Card key={expense.id}>
                                    <CardContent>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Stack spacing={0.5}>
                                                <Typography variant="h6">
                                                    {expense.title}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {expense.type === "income" ? "Gelir" : "Gider"}
                                                </Typography>
                                            </Stack>

                                            <Typography
                                                variant="h6"
                                                color={
                                                    expense.type === "income"
                                                        ? "success.main"
                                                        : "error.main"
                                                }
                                            >
                                                {expense.amount} TL
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    )}
            </Container>
        </div>
    )
}
export default Expense

import type { Book } from "../types/book";

import {
    Card,
    CardContent,
    Typography,
    Stack,
    Chip,
    Button
} from "@mui/material";

type BookCardProps = {
    book: Book;
    kitapSil: (id: string) => void;
    okunduDegistir: (id: string) => void;
    
};
function BookCard({ book, kitapSil, okunduDegistir }: BookCardProps) {
    return (
        <Card
            sx={{
                width: 300,
                borderRadius: 3,
            }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold" }}
                    >
                        {book.title}
                    </Typography>

                    <Typography color="text.secondary">
                        {book.author}
                    </Typography>

                    <Typography>
                        {book.pages} sayfa
                    </Typography>

                    <Chip
                        label={book.read ? "Okundu" : "Okunmadı"}
                        color={book.read ? "success" : "default"}
                        sx={{ alignSelf: "flex-start" }}
                    />
                    <Stack direction="row" spacing={1}>
                        <Button
                            variant="contained"
                            color={book.read ? "warning" : "success"}
                            onClick={() => okunduDegistir(book.id)}
                        >
                            {book.read ? "Okunmadı Yap" : "Okundu Yap"}
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => kitapSil(book.id)}
                        >
                            Sil
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default BookCard;
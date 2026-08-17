import { useState } from "react";
import type { Book } from "../types/book";

import {
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";

type BookFormProps = {
  kitapEkle: (book: Book) => void;
};

function BookForm({ kitapEkle }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  function handleSubmit() {
    if (
      title.trim() === "" ||
      author.trim() === "" ||
      pages.trim() === ""
    ) {
      return;
    }

    const yeniKitap: Book = {
      id: crypto.randomUUID(),
      title,
      author,
      pages: Number(pages),
      read: false,
    };

    kitapEkle(yeniKitap);

    setTitle("");
    setAuthor("");
    setPages("");
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        mb: 4,
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
        >
          Yeni Kitap Ekle
        </Typography>

        <TextField
          label="Kitap Adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Yazar"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <TextField
          label="Sayfa Sayısı"
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Kitap Ekle
        </Button>
      </Stack>
    </Paper>
  );
}

export default BookForm;
import { useState } from "react";
import type { Book } from "./types/book";
import BookCard from "./components/BookCard";
import BookForm from "./components/BookForm";
import BookSearch from "./components/BookSearch";
import BookStats from "./components/BookStats";

import {
  Container,
  Typography,
  Stack,
} from "@mui/material";

function App() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "Suç ve Ceza",
      author: "Fyodor Dostoyevski",
      pages: 687,
      read: false,
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      pages: 328,
      read: true,
    },
    {
      id: "3",
      title: "Sefiller",
      author: "Victor Hugo",
      pages: 1232,
      read: false,
    },
  ]);

  function kitapSil(id: string) {
    setBooks(
      books.filter((book) => book.id !== id)
    );
  }

  function okunduDegistir(id: string) {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, read: !book.read }
          : book
      )
    );
  }
  function kitapEkle(book: Book) {
    setBooks([...books, book]);
  }

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Book Tracker
      </Typography>
      <BookStats books={books} />
      <BookForm kitapEkle={kitapEkle} />
      <BookSearch
        search={search}
        setSearch={setSearch}
      />
      <Stack
        direction="row"
        sx={{
          gap: 3,
          flexWrap: "wrap",
        }}
      >

        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            kitapSil={kitapSil}
            okunduDegistir={okunduDegistir}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
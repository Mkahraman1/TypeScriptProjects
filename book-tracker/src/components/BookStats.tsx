import type { Book } from "../types/book";

import {
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type BookStatsProps = {
  books: Book[];
};

function BookStats({ books }: BookStatsProps) {
  const toplamKitap = books.length;

  const okunanKitap = books.filter(
    (book) => book.read
  ).length;

  const toplamSayfa = books.reduce(
    (toplam, book) => toplam + book.pages,
    0
  );

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
      }}
    >
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={3}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography>
          Toplam Kitap: <b>{toplamKitap}</b>
        </Typography>

        <Typography>
          Okunan: <b>{okunanKitap}</b>
        </Typography>

        <Typography>
          Toplam Sayfa: <b>{toplamSayfa}</b>
        </Typography>
      </Stack>
    </Paper>
  );
}

export default BookStats;
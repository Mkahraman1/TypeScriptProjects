import { TextField } from "@mui/material";

type BookSearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

function BookSearch({
  search,
  setSearch,
}: BookSearchProps) {
  return (
    <TextField
      fullWidth
      label="Kitap Ara"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 4 }}
    />
  );
}

export default BookSearch;
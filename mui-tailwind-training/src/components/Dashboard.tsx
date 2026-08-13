import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

function Dashboard() {
  return (
    <Box
      sx={{
        ml: "240px",
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Dashboard
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            flex: 1,
            p: 3,
            minWidth: 220,
          }}
        >
          <Stack spacing={2}>
            <Typography color="text.secondary">
              Kullanıcılar
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
            >
              1,240
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center" }}
            >
              <Chip
                label="+12%"
                color="success"
                size="small"
              />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                geçen aya göre
              </Typography>
            </Stack>
          </Stack>
        </Card>

        <Card
          sx={{
            flex: 1,
            p: 3,
            minWidth: 220,
          }}
        >
          <Stack spacing={2}>
            <Typography color="text.secondary">
              Siparişler
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
            >
              320
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center" }}
            >
              <Chip
                label="+8%"
                color="success"
                size="small"
              />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                geçen aya göre
              </Typography>
            </Stack>
          </Stack>
        </Card>

        <Card
          sx={{
            flex: 1,
            p: 3,
            minWidth: 220,
          }}
        >
          <Stack spacing={2}>
            <Typography color="text.secondary">
              Gelir
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
            >
              ₺84.500
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center" }}
            >
              <Chip
                label="-3%"
                color="error"
                size="small"
              />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                geçen aya göre
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}

export default Dashboard;
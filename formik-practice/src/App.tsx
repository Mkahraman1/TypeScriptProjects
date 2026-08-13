import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("İsim zorunlu"),

  email: Yup.string()
    .email("Geçerli bir email gir")
    .required("Email zorunlu"),

  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalı")
    .required("Şifre zorunlu"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Şifreler eşleşmiyor"
    )
    .required("Şifre tekrarı zorunlu"),
});

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mt: 5,
                borderRadius: 3,
              }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  Hesap Oluştur
                </Typography>

                <TextField
                  fullWidth
                  name="name"
                  label="Ad"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.name &&
                    Boolean(errors.name)
                  }
                  helperText={
                    touched.name &&
                    errors.name
                  }
                />

                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.email &&
                    Boolean(errors.email)
                  }
                  helperText={
                    touched.email &&
                    errors.email
                  }
                />

                <TextField
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.password &&
                    Boolean(errors.password)
                  }
                  helperText={
                    touched.password &&
                    errors.password
                  }
                />

                <TextField
                  fullWidth
                  name="confirmPassword"
                  label="Şifre Tekrar"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.confirmPassword &&
                    Boolean(errors.confirmPassword)
                  }
                  helperText={
                    touched.confirmPassword &&
                    errors.confirmPassword
                  }
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Kayıt Ol
                </Button>
              </Stack>
            </Paper>
          </form>
        </Container>
      )}
    </Formik>
  );
}

export default App;
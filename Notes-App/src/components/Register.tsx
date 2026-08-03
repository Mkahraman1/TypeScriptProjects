import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import { useFormik } from "formik"
import * as Yup from "yup"

type RegisterValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const initialValues: RegisterValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Ad soyad zorunludur"),

  email: Yup.string()
    .email("Geçerli bir email giriniz")
    .required("Email zorunludur"),

  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre zorunludur"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Şifreler aynı olmalıdır"
    )
    .required("Şifre tekrarı zorunludur"),
})

function Register() {
  const formik = useFormik<RegisterValues>({
    initialValues,
    validationSchema,

    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        Kayıt Formu
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            name="name"
            label="Ad Soyad"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.name &&
              Boolean(formik.errors.name)
            }
            helperText={
              formik.touched.name &&
              formik.errors.name
            }
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email &&
              Boolean(formik.errors.email)
            }
            helperText={
              formik.touched.email &&
              formik.errors.email
            }
          />

          <TextField
            name="password"
            label="Şifre"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password &&
              Boolean(formik.errors.password)
            }
            helperText={
              formik.touched.password &&
              formik.errors.password
            }
          />

          <TextField
            name="confirmPassword"
            label="Şifre Tekrar"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword
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
      </form>
    </Container>
  )
}

export default Register
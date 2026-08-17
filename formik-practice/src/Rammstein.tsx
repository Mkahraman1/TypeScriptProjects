import { useFormik } from "formik";
import * as yup from "yup";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  MenuItem, 
  Paper 
} from "@mui/material";

// 1. AŞAMA: Yup Kuralları (Validation Schema)
const formKurallari = yup.object({
  isim: yup
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalıdır")
    .required("Kullanıcı adı alanı zorunludur"),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi girin (örn: till@lindemann.com)")
    .required("E-posta alanı zorunludur"),
  favoriAlbum: yup
    .string()
    .required("Lütfen favori albümünüzü seçin"),
  sifre: yup
    .string()
    .min(8, "Şifre güvenliğiniz için en az 8 karakter olmalıdır")
    .required("Şifre belirlemek zorunludur"),
});

// Dropdown (Select) menüsü için albüm listesi
const rammsteinAlbumleri = [
  { value: "mutter", label: "Mutter (2001)" },
  { value: "sehnsucht", label: "Sehnsucht (1997)" },
  { value: "zeit", label: "Zeit (2022)" },
  { value: "reise_reise", label: "Reise, Reise (2004)" }
];

export default function RammsteinForm() {
  
  // 2. AŞAMA: Formik Bağlantısı
  const formik = useFormik({
    initialValues: {
      isim: "",
      email: "",
      favoriAlbum: "",
      sifre: "",
    },
    validationSchema: formKurallari,
    onSubmit: (values) => {
      alert("Form Başarıyla Gönderildi: \n" + JSON.stringify(values, null, 2));
      console.log("Sunucuya gidecek veri:", values);
    },
  });

  // Ortak Stil Objesi (Tekrarı önlemek için)
  const ortakStiller = {
    '& .MuiInputLabel-root': { color: '#aaa' },
    input: { color: 'white' },
    fieldset: { borderColor: '#555' }
  };

  return (
    // 3. AŞAMA: Material-UI Arayüzü
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, bgcolor: '#121212', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500, bgcolor: '#1e1e1e', color: 'white' }}>
        
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', color: '#d32f2f' }}>
          Rammstein Fan Kulübü Kayıt
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            {/* İSİM ALANI */}
            <TextField
              fullWidth
              id="isim"
              name="isim"
              label="Kullanıcı Adı"
              variant="outlined"
              value={formik.values.isim}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.isim && Boolean(formik.errors.isim)}
              helperText={formik.touched.isim && formik.errors.isim}
              sx={ortakStiller}
            />

            {/* E-POSTA ALANI */}
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-Posta Adresi"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={ortakStiller}
            />

            {/* ALBÜM SEÇİM ALANI (Select) */}
            <TextField
              select
              fullWidth
              id="favoriAlbum"
              name="favoriAlbum"
              label="Favori Albümünüz"
              value={formik.values.favoriAlbum}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.favoriAlbum && Boolean(formik.errors.favoriAlbum)}
              helperText={formik.touched.favoriAlbum && formik.errors.favoriAlbum}
              sx={{
                ...ortakStiller,
                select: { color: 'white' }, // Select özel stili
                '& .MuiSvgIcon-root': { color: 'white' } // Açılır menü okunu da beyaz yapıyoruz
              }}
            >
              {rammsteinAlbumleri.map((album) => (
                <MenuItem key={album.value} value={album.value}>
                  {album.label}
                </MenuItem>
              ))}
            </TextField>

            {/* ŞİFRE ALANI */}
            <TextField
              fullWidth
              id="sifre"
              name="sifre"
              type="password"
              label="Şifre"
              value={formik.values.sifre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.sifre && Boolean(formik.errors.sifre)}
              helperText={formik.touched.sifre && formik.errors.sifre}
              sx={ortakStiller}
            />

            {/* GÖNDER BUTONU */}
            <Button color="error" variant="contained" fullWidth type="submit" sx={{ mt: 2, py: 1.5 }}>
              Kayıt Ol
            </Button>

          </Box>
        </form>
      </Paper>
    </Box>
  );
}


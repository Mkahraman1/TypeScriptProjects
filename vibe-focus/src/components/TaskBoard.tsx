import { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormik } from 'formik';
import * as yup from 'yup';

const taskSchema = yup.object({
  taskName: yup
    .string()
    .min(3, "Görev en az 3 karakter olmalıdır")
    .required("Boş bir görev ekleyemezsiniz"),
});

export default function TaskBoard() {
  const [tasks, setTasks] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      taskName: "",
    },
    validationSchema: taskSchema,
    onSubmit: (values, { resetForm }) => {
      setTasks([...tasks, values.taskName]);
      resetForm();
    },
  });

  const handleDelete = (indexToDelete: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Box sx={{ mt: 4, p: 3, backgroundColor: '#2a2a2a', borderRadius: 2 }}>
      <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
        Hedefler ve Görevler
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            id="taskName"
            name="taskName"
            placeholder="Kalkülüs bütünlemesine çalış..."
            variant="outlined"
            value={formik.values.taskName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.taskName && Boolean(formik.errors.taskName)}
            helperText={formik.touched.taskName && formik.errors.taskName}
            sx={{
              input: { color: 'white' },
              fieldset: { borderColor: '#555' },
              '& .MuiFormHelperText-root': { color: '#f44336' }
            }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            sx={{ px: 4, height: '56px' }}
          >
            Ekle
          </Button>
        </Stack>
      </form>

      <Stack spacing={2} sx={{ mt: 4 }}>
        {tasks.map((task, index) => (
          <Paper 
            key={index} 
            sx={{ 
              p: 2, 
              backgroundColor: '#1e1e1e', 
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography>{task}</Typography>
            <IconButton color="error" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
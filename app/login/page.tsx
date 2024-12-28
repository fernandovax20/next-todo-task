'use client';

import { Box, Button, TextField, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <Typography variant="h4" className="text-center">
        Iniciar Sesión
      </Typography>
      <TextField label="Correo Electrónico" type="email" fullWidth />
      <TextField label="Contraseña" type="password" fullWidth />
      <Button variant="contained" fullWidth>
        Iniciar Sesión
      </Button>
    </Box>
  );
}
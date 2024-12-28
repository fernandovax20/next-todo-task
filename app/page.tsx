'use client';

import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm" className="flex flex-col gap-4 p-4">
      <Typography variant="h4" className="text-center">
        Bienvenido a la App de Tareas
      </Typography>
      <Typography variant="body1" className="text-center">
        Gestiona tus tareas fácilmente con nuestras herramientas.
      </Typography>
    </Container>
  );
}
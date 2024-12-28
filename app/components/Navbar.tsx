'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6">
          App de Tareas
        </Typography>
        <Box className="flex gap-4">
          <Button color="inherit" component={Link} href="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} href="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} href="/register">
            Registro
          </Button>
          <Button color="inherit" component={Link} href="/todo">
            Tareas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
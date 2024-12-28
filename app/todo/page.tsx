'use client';

import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <Box className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <Typography variant="h4" className="text-center">
        Mis Tareas
      </Typography>
      <Box className="flex gap-4">
        <TextField
          label="Nueva Tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={addTask}>
          Añadir
        </Button>
      </Box>
      <Box className="mt-4">
        {tasks.length === 0 ? (
          <Typography variant="body1">No hay tareas aún.</Typography>
        ) : (
          <ul className="list-disc list-inside">
            {tasks.map((task, index) => (
              <li key={index} className="mt-2">
                {task}
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
}
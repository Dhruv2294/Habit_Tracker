import React, { useState } from 'react';
import { Box, Flex, Heading, Button, useToast } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import HabitForm from './components/HabitForm';
import Profile from './components/Profile';
import Notification from './components/Notification';
import { mockHabits } from './data';

function App() {
  const [habits, setHabits] = useState(mockHabits);
  const [showForm, setShowForm] = useState(false);
  const toast = useToast();

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
    setShowForm(false);
    toast({
      title: 'New habit added!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const toggleHabitCompletion = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  return (
    <Box className="app-container">
      <Heading textAlign="center" my="4">Habit Tracker</Heading>
      <Flex justify="space-between" px="6">
        <Button colorScheme="teal" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Close' : 'Add New Habit'}
        </Button>
        <Profile />
      </Flex>
      {showForm && <HabitForm addHabit={addHabit} />}
      <Dashboard habits={habits} toggleCompletion={toggleHabitCompletion} />
      <Notification />
    </Box>
  );
}

export default App;

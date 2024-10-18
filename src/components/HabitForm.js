import React, { useState } from 'react';
import { Box, Input, Button, FormControl, FormLabel, Select } from '@chakra-ui/react';

const HabitForm = ({ addHabit }) => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ name, frequency, completed: false });
    setName('');
  };

  return (
    <Box p={6}>
      <FormControl isRequired>
        <FormLabel>Habit Name :-</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter habit name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Frequency</FormLabel>
        <Select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Select>
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
        Add Habit
      </Button>
    </Box>
  );
};

export default HabitForm;

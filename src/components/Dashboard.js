import React from 'react';
import { Box, Text, Stack, Checkbox, Badge } from '@chakra-ui/react';

const Dashboard = ({ habits, toggleCompletion }) => (
  <Stack spacing={4} mt={4} px={6}>
    {habits.map((habit, index) => (
      <Box key={index} className="habit-card" p={4} borderWidth={1} borderRadius="md">
        <Checkbox
          isChecked={habit.completed}
          onChange={() => toggleCompletion(index)}
          size="lg"
          colorScheme="green"
        >
          <Text fontSize="xl">{habit.name}</Text>
        </Checkbox>
        <Badge mt={2} colorScheme={habit.completed ? 'green' : 'red'}>
          {habit.completed ? 'Completed' : 'Pending'}
        </Badge>
      </Box>
    ))}
  </Stack>
);

export default Dashboard;

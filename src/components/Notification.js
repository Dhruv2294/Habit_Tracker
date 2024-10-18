import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Notification = () => (
  <Box className="notification-panel" p={4} mt={4}>
    <Text fontSize="lg" fontWeight="bold">
      🌟 Keep going! You’re building great habits. 🌟
    </Text>
  </Box>
);

export default Notification;

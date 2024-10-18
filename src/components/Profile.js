import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Text,
  VStack,
} from '@chakra-ui/react';

const Profile = () => {
  // State to manage profile data and edit mode
  const [profile, setProfile] = useState({
    username: 'Dhruv Patel',
    email: 'dhruvpatel@gmail.com',
    motivation: 'Keep pushing forward! You can do Anything',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  // Handle input change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save the updated profile data
  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <Box p={6} borderWidth={1} borderRadius="md" className="profile-container">
      <VStack spacing={4} align="start">
        {isEditing ? (
          <>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Motivational Message</FormLabel>
              <Input
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Enter a motivational message"
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontWeight="bold" fontSize="lg">
              {profile.username}
            </Text>
            <Text>Email: {profile.email}</Text>
            <Text>Motivational Message: {profile.motivation}</Text>
            <Button colorScheme="blue" size="sm" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Profile;

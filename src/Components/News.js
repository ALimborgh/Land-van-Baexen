import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const News = () => {
  return (
    <Box>
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Nieuws</Heading>
          <Text>Hier komt dan het recente nieuws te staan.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default News;
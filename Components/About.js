import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box>
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Wie zijn wij?</Heading>
          <Text>
            Het bestuur en kartrekkerscomité van voorheen Herenboeren Roermond, nu Land van Baexen, stelt zich kort voor:
            (deze website wordt binnenkort aangepast met de nieuwe naam)
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
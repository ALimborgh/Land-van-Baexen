import React from 'react';
import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';

const About = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Beaxen Header" w="100%" />
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
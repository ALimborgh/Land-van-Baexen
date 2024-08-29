import React from 'react';
import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';

const News = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Beaxen Header" w="100%" />
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
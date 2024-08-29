import React from 'react';
import { Box, Heading, Link, Image, Text, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Image src="./Assets/Images/herenboeren_kopafbeelding.jpg" alt="Land van Beaxen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Herenboeren Roermond</Heading>
          <Text>Update:</Text>
          <Text>Er is een lokatie gevonden en Herenboeren Roermond heet voortaan Land van Baexen. Een nieuwe website volgt spoedig!</Text>
          <Text>Voor vragen: <Link href="mailto:info@landvanbaexen.nl" color="blue.500">info@landvanbaexen.nl</Link></Text>
          <Text>
            Land van Baexen is een initiatief van een groep inwoners uit de regio Roermond. 
            Wij willen grip op ons eten, gezond eten, weten waar het vandaan komt en hoe het geproduceerd wordt.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
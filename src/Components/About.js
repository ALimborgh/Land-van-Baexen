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
            Wij gaan een goed georganiseerde boerderij opzetten, 
            waar puur en eerlijk voedsel wordt geproduceerd: groenten, aardappelen, fruit, eieren, rund-, varkens- en kippenvlees. 
            Alles van een hoge kwaliteit en voor een prijs die vergelijkbaar is met die van de supermarkt. 
            Het wordt een plek waar het goed toeven is voor mens en dier. 
            Een ervaren boer zal verantwoordelijk zijn voor het werk op de boerderij.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
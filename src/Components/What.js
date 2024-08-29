import React from 'react';
import { Box, Container, Heading, Text, Image } from '@chakra-ui/react';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';

const What = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Beaxen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Wat</Heading>
          <Text>
            Wij gaan een goed georganiseerde boerderij opzetten, 
            waar puur en eerlijk voedsel wordt geproduceerd: groenten, aardappelen, fruit, eieren, rund-, varkens- en kippenvlees. 
            Alles van een hoge kwaliteit en voor een prijs die vergelijkbaar is met die van de supermarkt. 
            Het wordt een plek waar het goed toeven is voor mens en dier. 
            Een ervaren boer zal verantwoordelijk zijn voor het werk op de boerderij. 
            In Boxtel bestaat reeds een Herenboerderij die volop in bedrijf is. bekijk het onderstaande filmpje. 
            In minder dan 2 minuten krijg je een aardige indruk van de enorme variatie aan gewassen en dieren op de Herenboerderij in Boxtel; 
            van hennen en hanen tot fruitteelt, tuinbouw, runderen en varkens. 
            En dat alles op minder dan 20 hectare en voor niet minder dan (uiteindelijk) 500 mensen.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default What;
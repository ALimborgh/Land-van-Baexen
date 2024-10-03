import React from 'react';
import { Box, Container, Heading, Text, Image, Link, VStack } from '@chakra-ui/react';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';
import nieuwsbrieven from '../Assets/Nieuwsbrieven/Nieuwsbrieven';

const News = () => {
  // Sort newsletters by date in descending order
  const sortedNewsletters = nieuwsbrieven.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Box>
      <Image src={headerimg} alt="Land van Beaxen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Nieuws</Heading>
          <Text>Hieronder een overzicht van de nieuwsbrieven.</Text>
        </Box>
        <VStack spacing={4} align="stretch">
          {sortedNewsletters.map((newsletter, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="sm">{newsletter.title}</Heading>
              <Text>{new Date(newsletter.date).toLocaleDateString()}</Text>
              <Text>{newsletter.description}</Text>
              <Link href={newsletter.link} color="blue.500" isExternal>
                Lees meer
              </Link>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default News;
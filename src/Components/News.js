import React from 'react';
import { Box, Container, Heading, Text, Link, Image, VStack } from '@chakra-ui/react';
import nieuwsbrieven from '../Assets/Nieuwsbrieven/Nieuwsbrieven';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';

const News = () => {
  // Sort newsletters by date in descending order
  const sortedNewsletters = nieuwsbrieven.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Box>
      <Image src={headerimg} alt="Land van Baexen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Nieuws</Heading>
          <Text>Hieronder een overzicht van de nieuwsbrieven.</Text>
        </Box>
        <VStack spacing={4} align="stretch">
          {sortedNewsletters.map((newsletter, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="sm" mb={2}>{newsletter.title}</Heading>
              <Text mb={2}>{new Date(newsletter.date).toLocaleDateString()}</Text>
              <Text mb={4}>{newsletter.description}</Text>
              <Link href={newsletter.link} color="blue.500" isExternal _hover={{ textDecoration: 'underline' }}>
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
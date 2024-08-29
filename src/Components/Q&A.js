import React from 'react';
import { Box, Container, Heading, Text, Link } from '@chakra-ui/react';

const QA = () => {
  return (
    <Box>
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Veelgestelde vragen</Heading>
          <Text>
            Deze website wordt binnenkort aangepast omdat we een lokatie hebben gevonden en vanaf nu Land van Baexen heten. 
            Veel van onderstaande informatie is nog correct, maar mail ons bij vragen op <Link href="mailto:info@landvanbaexen.nl" color="blue.500">info@landvanbaexen.nl</Link>. 
            Een eigen boerderij waarmee we grip willen krijgen op wat we eten. 
            Samen met jou willen we dit avontuur aan en ervaring opdoen rondom ‘samen duurzaam voedsel produceren’. 
            Omdat we misschien nog niet op alle individuele vragen een exact antwoord kunnen geven, 
            hebben we hiernaast veelgestelde vragen en de antwoorden op een rijtje gezet. 
            De lijst wordt regelmatig van een update voorzien.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default QA;
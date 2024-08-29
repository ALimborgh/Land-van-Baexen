import React from 'react';
import { Box, Heading, Link, Image, Text, Container, Grid } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';
import watimg from '../Assets/Images/Ivar-Pel-10-1024x683-600x300.jpg';
import hoeimg from '../Assets/Images/Uitleveren-foto-Marc-Bolsius-2-1024x683-600x300.jpg';
import waarimg from '../Assets/Images/Ivar-Pel-33-1024x683-600x300.jpg';

const Home = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Beaxen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Herenboeren Roermond</Heading>
          <Text>Update:</Text>
          <Text>Er is een lokatie gevonden en Herenboeren Roermond heet voortaan Land van Baexen.</Text>
          <Text>Voor vragen: <Link href="mailto:info@landvanbaexen.nl" color="blue.500">info@landvanbaexen.nl</Link></Text>
          <Text>
            Land van Baexen is een initiatief van een groep inwoners uit de regio Roermond. 
            Wij willen grip op ons eten, gezond eten, weten waar het vandaan komt en hoe het geproduceerd wordt.
          </Text>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box as="section" mb={8}>
            <Heading as="h2" size="md">Wat is een Herenboerderij?</Heading>
            <Image src={watimg} alt="Foto Wat" w="100%" />
            <Text>
              Wij willen een goed georganiseerde coöperatieve boerderij opzetten. 
              Het wordt een plek waar duurzaam, puur en eerlijk voedsel wordt geproduceerd exclusief voor de leden-Herenboeren: 
              groenten, aardappelen, fruit, eieren, rund-, varkens- en kippenvlees. 
              Een ervaren boer is straks verantwoordelijk voor het werk op de boerderij. 
              Alles is van een hoge kwaliteit en de prijs is vergelijkbaar met die van de supermarkt. 
              Het wordt een plek waar het goed toeven is voor mens en dier.
            </Text>
            <Link
              as={RouterLink}
              to="/about"
              fontWeight="bold"
            >
              Lees hier meer
            </Link>
          </Box>
          <Box as="section" mb={8}>
            <Heading as="h2" size="md">Hoe werkt het?</Heading>
            <Image src={hoeimg} alt="Foto Hoe" w="100%" />
            <Text>
              Om in de regio een Herenboerderij op te starten, 
              zijn minimaal 150 deelnemende huishoudens nodig. 
              Daarom zijn we een zoektocht gestart naar mensen die met ons zo’n kleinschalige boerderij willen oprichten en exploiteren. 
              Ben jij enthousiast? Laat het ons weten en vertel anderen over dit initiatief.
            </Text>
            <Link
              as={RouterLink}
              to="/contact"
              fontWeight="bold"
            >
              Lees hier meer
            </Link>
          </Box>
          <Box as="section" mb={8}>
            <Heading as="h2" size="md">Waar is het?</Heading>
            <Image src={waarimg} alt="Foto Waar" w="100%" />
            <Text>
              Een Herenboerderij is 15 tot 20 hectare groot en ligt bij voorkeur dichtbij de woonplaats van de Herenboeren. 
              Als blijkt dat er genoeg geïnteresseerden zijn, gaan we samen met anderen op zoek naar geschikte gronden in de buurt van Roermond.
            </Text>
            <Link
              as={RouterLink}
              to="/contact"
              fontWeight="bold"
            >
              Lees hier meer
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
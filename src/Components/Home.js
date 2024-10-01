import React from 'react';
import { Box, Heading, Link, Image, Text, Container, Grid } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';
import watimg from '../Assets/Images/Ivar-Pel-10-1024x683-600x300.jpg';
import hoeimg from '../Assets/Images/Uitleveren-foto-Marc-Bolsius-2-1024x683-600x300.jpg';
import ikdoemee from '../Assets/Images/pngimg.com - buttons_PNG179.png';

const Home = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Baexen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Text>
            Land van Baexen is een initiatief van een groep inwoners uit de regio Roermond. 
            Wij willen grip op ons eten, gezond eten, weten waar het vandaan komt en hoe het geproduceerd wordt. 
            We willen erop kunnen vertrouwen dat ons eten eerlijk is geproduceerd, met respect voor de boer, de dieren en de natuur.
            </Text>
          <Text>
            We hebben in Swalmen de mogelijkheid gevonden om in de omgeving van Roermond te komen tot een kleinschalig gemengd boerenbedrijf;  
            Want het is toch fantastisch als ons eten in onze eigen omgeving wordt geproduceerd? 
            En wat is er leuker dan een boerderij te hebben waar je van eet?
          </Text>
        </Box>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>

          <Box as="section" mb={8}>
            <Heading as="h2" size="md">Wat is een Land van Baexen boerderij?</Heading>
            <Image src={watimg} alt="Foto Wat" w="100%" />
            <Text>
              Wij willen een goed georganiseerde coöperatieve boerderij opzetten. 
              Het wordt een plek waar duurzaam, puur en eerlijk voedsel wordt geproduceerd exclusief voor de leden-Herenboeren: 
              groenten, aardappelen, fruit, eieren, rund-, varkens- en kippenvlees. 
              Een ervaren boer is straks verantwoordelijk voor het werk op de boerderij. 
              Alles is van een hoge kwaliteit en de prijs is vergelijkbaar met die van de supermarkt. 
              Het wordt een plek waar het goed toeven is voor mens en dier.
            </Text>
          </Box>

          <Box as="section" mb={8}>
            <Heading as="h2" size="md">Hoe werkt het?</Heading>
            <Image src={hoeimg} alt="Foto Hoe" w="100%" />
            <Text>
                Om in de regio een boerderij op te starten, zijn minimaal 150 deelnemende huishoudens nodig.
                Daarom zijn we een zoektocht gestart naar mensen die met ons zo’n kleinschalige boerderij willen oprichten en exploiteren.
                Ben jij enthousiast? Laat het ons weten en vertel anderen over dit initiatief.
            </Text>
            <Link
              as={RouterLink}
              to="https://landvanbaexen.email-provider.eu/download/p5zkub7rma/1xlg5qymBJ?file=Aanmeldingsformulier_LvB_Sept2024.pdf&l=d1mmbrmf3o"
              fontWeight="bold"
              target='_blank'
            >
              <Image src={ikdoemee} alt="" style={{ float: 'center', width: '150px', height: '100px' }}/>
            </Link>
          </Box>

          <Box as="section" mb={8}>
          <Heading as="h2" size="md">Waar</Heading>
            <Text align="center">
              Land van Baexen, Beeselseweg, 6071 PM Swalmen
            </Text>
            <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3109.06418211671!2d6.03113537716706!3d51.24378847175446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDE0JzM3LjYiTiA2wrAwMicwMS40IkU!5e1!3m2!1sen!2snl!4v1725012810049!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
                title="weather-widget"
                width="50%"
                height="290px"
                frameBorder="0"
                scrolling="no"
                loading="lazy"
                src="https://www.weeronline.nl/widget/activity?id=4058095&activity=gardening"
            ></iframe>
          </Box>

        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
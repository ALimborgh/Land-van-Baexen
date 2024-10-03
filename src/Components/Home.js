import React from 'react';
import { Box, Heading, Link, Image, Text, Grid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';
import watimg from '../Assets/Images/Ivar-Pel-10-1024x683-600x300.jpg';
import hoeimg from '../Assets/Images/Uitleveren-foto-Marc-Bolsius-2-1024x683-600x300.jpg';
import ikdoemee from '../Assets/Images/pngimg.com - buttons_PNG179.png';
import nieuwsbrieven from '../Assets/Nieuwsbrieven/Nieuwsbrieven';

const Home = () => {
  // Sort newsletters by date in descending order and get the latest one
  const latestNewsletter = nieuwsbrieven.sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  return (
    <>
    <Box>
      <Image src={headerimg} alt="Land van Baexen Header" w="100%" />
    </Box>

    <Box>
      <Box as="main" maxW="container.xl" mx="auto" py={8} >
        <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
          <Text mb={4}>
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

        <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Belangrijke data</Heading>
          <Text mb={4}>
            Zaterdag 28 september is de eerste plukdag.
            Meer info <Link 
            href="https://landvanbaexen.email-provider.eu/web/p5zkub7rma/iosarec2sf/d1mmbrmf3o/fmi8cnl0j1" 
            isExternal
            color="blue.500"
            >
              hier
            </Link>.
          </Text>
        </Box>
            
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>
          <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" mb={4}>Wat is een Land van Baexen boerderij?</Heading>
            <Image src={watimg} alt="Wat is een Land van Baexen boerderij?" w="100%" mb={4} />
            <Text>
              Wij willen een goed georganiseerde coöperatieve boerderij opzetten. 
              Het wordt een plek waar duurzaam, puur en eerlijk voedsel wordt geproduceerd exclusief voor de leden-Herenboeren: 
              groenten, aardappelen, fruit, eieren, rund-, varkens- en kippenvlees. 
              Een ervaren boer is straks verantwoordelijk voor het werk op de boerderij. 
              Alles is van een hoge kwaliteit en de prijs is vergelijkbaar met die van de supermarkt. 
              Het wordt een plek waar het goed toeven is voor mens en dier.
            </Text>
          </Box>

          <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" mb={4}>Hoe werkt het?</Heading>
            <Image src={hoeimg} alt="Hoe werkt het?" w="100%" mb={4} />
            <Text mb={4}>
              Om in de regio een boerderij op te starten, zijn minimaal 150 deelnemende huishoudens nodig.
              Daarom zijn we een zoektocht gestart naar mensen die met ons zo’n kleinschalige boerderij willen oprichten en exploiteren.
              Ben jij enthousiast? Laat het ons weten en vertel anderen over dit initiatief.
            </Text>
            <Link
              as={RouterLink}
              to="https://landvanbaexen.email-provider.eu/download/p5zkub7rma/1xlg5qymBJ?file=Aanmeldingsformulier_LvB_Sept2024.pdf&l=d1mmbrmf3o"
              fontWeight="bold"
              target="_blank"
              display="inline-block"
              textAlign="center"
            >
              <Image src={ikdoemee} alt="Ik doe mee" boxSize="150px" />
            </Link>
          </Box>

          <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" mb={4}>Waar is de boerderij?</Heading>
            <Text textAlign="center" mb={4}>
              Land van Baexen, Beeselseweg, 6071 PM Swalmen
            </Text>
            <Box
              as="iframe"
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3109.06418211671!2d6.03113537716706!3d51.24378847175446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDE0JzM3LjYiTiA2wrAwMicwMS40IkU!5e1!3m2!1sen!2snl!4v1725012810049!5m2!1sen!2snl"
              width="100%"
              height="400px"
              border="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Box
              as="iframe"
              title="widget"
              src="https://www.weeronline.nl/widget/activity?id=4058095&activity=gardening"
              width="100%;"
              height="290px"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              />
          </Box>

          <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" mb={4}>Laatste Nieuwsbrief</Heading>
            {latestNewsletter && (
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="sm" mb={2}>{latestNewsletter.title}</Heading>
                <Text mb={2}>{new Date(latestNewsletter.date).toLocaleDateString()}</Text>
                <Text mb={4}>{latestNewsletter.description}</Text>
                <Link href={latestNewsletter.link} color="blue.500" isExternal>
                  Lees meer
                </Link>
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
    </>
  );
};

export default Home;
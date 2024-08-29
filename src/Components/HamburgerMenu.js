// src/components/HamburgerMenu.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  IconButton, 
  Drawer, 
  DrawerBody, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  useDisclosure, 
  VStack 
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleLinkClick = () => {
    onClose(); // Close the drawer when a link is clicked
  };

  return (
    <Box>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        onClick={onOpen}
        aria-label="Open menu"
        variant="outline"
        display={{ base: 'block', md: 'none' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <RouterLink to="/" onClick={handleLinkClick}>Home</RouterLink>
              <RouterLink to="/About" onClick={handleLinkClick}>About</RouterLink>
              <RouterLink to="/News" onClick={handleLinkClick}>News</RouterLink>
              <RouterLink to="/Q&A" onClick={handleLinkClick}>Q&A</RouterLink>
              <RouterLink to="/What" onClick={handleLinkClick}>What</RouterLink>
              <RouterLink to="/Contact" onClick={handleLinkClick}>Contact</RouterLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;

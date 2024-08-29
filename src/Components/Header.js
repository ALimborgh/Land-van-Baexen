import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box  px={4} bg="green.300" boxShadow="md" position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          as={'nav'}
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
          ml="auto"
        >
          <Link as={RouterLink} to="/" >
            Home
          </Link>
          <Link as={RouterLink} to="/about" >
            About
          </Link>
          <Link as={RouterLink} to="/news" >
            News
          </Link>
          <Link as={RouterLink} to="/what" >
            What
          </Link>
          <Link as={RouterLink} to="/Q&A" >
            Q&A
          </Link>
          <Link as={RouterLink} to="/contact" >
            Contact
          </Link>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose} >
              Home
            </Link>
            <Link as={RouterLink} to="/about" onClick={onClose} >
              About
            </Link>
            <Link as={RouterLink} to="/news" onClick={onClose} >
              News
            </Link>
            <Link as={RouterLink} to="/what" onClick={onClose} >
              What
            </Link>
            <Link as={RouterLink} to="/Q&A" onClick={onClose} >
              Q&A
            </Link>
            <Link as={RouterLink} to="/contact" onClick={onClose} >
              Contact
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
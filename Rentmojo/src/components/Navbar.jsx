import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import Login from './Login';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.svg';
import './Navbar.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);
  const logoSrc = useBreakpointValue({
    base: logo2, // Small devices
    md: logo, // Medium and up devices
  });

  const buttonSize = useBreakpointValue({
    base: 'sm', // Small devices
    md: 'md', // Medium devices and up
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <Box
        position="fixed"
        width="100%"
        top={0}
        zIndex={1000}
        textAlign={'center'}
        bg={useColorModeValue('white', 'gray.800')}
        transition="box-shadow 0.2s"
        boxShadow={scrollY > 0 ? 'md' : 'none'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mx="auto" maxW="1200px" px={4}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <img src={logoSrc} alt="Logo" style={{ height: '40px' }} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
            >
              <Menu>
                <HStack spacing={2}>
                  <span>Bangalore</span>
                  <MenuButton as={IconButton} icon={<AiOutlineDown />} />
                </HStack>
                <MenuList>
                  <MenuItem>Delhi</MenuItem>
                  <MenuItem>Mumbai</MenuItem>
                  <MenuItem>Kolkata</MenuItem>
                  <MenuItem>Chennai</MenuItem>
                </MenuList>
              </Menu>
              <InputGroup width={{ base: '200px', md: '600px' }}>
                <Input type="text" placeholder="Search for products" />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button variant="ghost" leftIcon={<FiShoppingCart />}>
              Cart
            </Button>
            <Button
              onClick={onLoginOpen}
              colorScheme="red"
              size={buttonSize}
              ml={4}
              className="login"
              display={{ base: 'none', md: 'inline-flex' }}
              sx={{
                ':hover': {
                  bg: 'white',
                  color: 'red.500',
                  border: '1px solid',
                  borderColor: 'red.500',
                },
              }}
            >
              LOGIN / SIGNUP
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  width="100%"
                  display="flex"
                  blendMode={'multiply'}
                  alignItems="center"
                >
                  <span className="loc">Bangalore</span>
                  <IconButton colorScheme="#E2E8F0" icon={<AiOutlineDown />} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Delhi</MenuItem>
                  <MenuItem>Mumbai</MenuItem>
                  <MenuItem>Kolkata</MenuItem>
                  <MenuItem>Chennai</MenuItem>
                </MenuList>
              </Menu>
              <InputGroup width="100%">
                <Input type="text" placeholder="Search for products" />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputRightElement>
              </InputGroup>
              <Box>
                <Button
                  onClick={onLoginOpen}
                  colorScheme="red"
                  size={buttonSize}
                  sx={{
                    ':hover': {
                      bg: 'white',
                      color: 'red.500',
                    },
                  }}
                >
                  LOGIN / SIGNUP
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login / Signup</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;

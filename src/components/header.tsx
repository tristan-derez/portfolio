import "@fontsource/permanent-marker";
import "@fontsource/anonymous-pro";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Spacer, Switch, chakra, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export const HeaderComponent = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Flex
            w="100%"
            pos="fixed"
            padding="5px"
            background={colorMode === "light" ? "#1A202C" : "#283048"}
            color={colorMode === "light" ? "white" : "white"}
        >
            <Flex ml="20px">
                <HeaderLink
                    href="#"
                    onClick={() => window.scrollTo(0, 0)}
                    fontFamily="Permanent marker"
                    fontSize="30px"
                >
                    Tristan Derez
                </HeaderLink>
            </Flex>
            <Spacer />
            <HStack mr="20px" spacing="20px" fontSize="16px" fontFamily="Anonymous Pro">
                <HeaderLink href="#about">A propos</HeaderLink>
                <HeaderLink href="#projects">Projets</HeaderLink>
                <HeaderLink href="#contact">Contact</HeaderLink>
                <IconBut isRound="yes" onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMdMoon /> : <IoMdSunny />}
                </IconBut>
            </HStack>
        </Flex>
    );
};

const HeaderLink = ({ children, ...props }) => {
    return (
        <chakra.a cursor="pointer" _hover={{ fontWeight: "bold", willChange: "translateY(-10)" }} {...props}>
            {children}
        </chakra.a>
    );
};

const IconBut = ({ children, ...props }) => {
    const background = useColorModeValue("orange.400", "orange.600");
    return (
        <IconButton
            bg={background}
            _hover={{ bg: useColorModeValue("orange.200", "orange.400") }}
            {...props}
            aria-label="toggle light/dark mode"
        >
            {children}
        </IconButton>
    );
};

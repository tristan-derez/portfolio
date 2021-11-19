import "@fontsource/permanent-marker";
import "@fontsource/anonymous-pro";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    Spacer,
    chakra,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export const HeaderComponent = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    let [display, changeDisplay] = useState("none");
    return (
        <Flex w="100%" pos="fixed" padding="5px" color={useColorModeValue("black", "white")}>
            <Flex>
                <Link href="#" onClick={() => window.scrollTo(0, 0)}>
                    <Image src="../../images/logo_tristan.png" boxSize="40px" alt="website logo" />
                </Link>
            </Flex>
            <Spacer />
            <HStack
                mr="20px"
                spacing="20px"
                fontSize="16px"
                fontFamily="Anonymous Pro"
                display={["none", "none", "flex", "flex"]}
            >
                <HeaderLink href="#about">A propos</HeaderLink>
                <HeaderLink href="#projects">Projets</HeaderLink>
                <HeaderLink href="#contact">Contact</HeaderLink>
            </HStack>
            <HStack>
                {/* Hamburger Icon/Open Menu Button */}
                <IconButton
                    aria-label="open menu"
                    icon={<HamburgerIcon />}
                    display={["flex", "flex", "none", "none"]}
                    onClick={() => changeDisplay("flex")}
                    bg="none"
                />
                {/* Toggle Light/Dark Mode Button */}
                <IconBut isRound="yes" onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMdMoon /> : <IoMdSunny />}
                </IconBut>
            </HStack>
            {/* Navbar on mobile device */}
            <Flex
                w="100vw"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
                background={colorMode === "light" ? "#1A202C" : "#283048"}
                opacity="0.8"
                position="absolute"
            >
                <Flex justify="flex-end">
                    {/* Close Icon Button */}
                    <IconButton
                        aria-label="close menu"
                        mt={2}
                        mr={2}
                        size="lg"
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay("none")}
                        bg="none"
                    />
                </Flex>
                <Flex flexDir="column" align="center" fontFamily="Anonymous Pro">
                    <HeaderLink href="#contact" mt="40px">
                        Contact
                    </HeaderLink>
                </Flex>
            </Flex>
        </Flex>
    );
};

const HeaderLink = ({ children, ...props }) => {
    return (
        <chakra.a
            padding="10px"
            cursor="pointer"
            _hover={{
                backgroundImage: "url('/images/trace-peinture-orange.png')",
                backgroundSize: "cover",
                backgroundRepeat: "round",
                fontWeight: "bold",
                transform: "translateY(3px)",
            }}
            {...props}
        >
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

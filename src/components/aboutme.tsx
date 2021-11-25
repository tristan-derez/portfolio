import "@fontsource/permanent-marker";
import "@fontsource/anonymous-pro";

import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    IconButton,
    Image,
    Link,
    Spacer,
    Stack,
    Text,
    chakra,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

export const AboutMeContainer = (props) => {
    const { toggleColorMode, colorMode } = useColorMode();
    const textlink = useColorModeValue("orange.400", "orange.600");
    return (
        <Flex
            minHeight="100vh"
            w="100vw"
            spacing="25px"
            flexDirection={["column", "column", "column", "row"]}
            alignItems="center"
            justifyContent="center"
            mt={["75px", "75px", 0]}
            {...props}
            id="about"
        >
            <Image
                borderRadius="full"
                boxSize={[250, 400]}
                src="https://i.ibb.co/9nm1rw7/download20210300011044.png"
                alt="Profile pic"
                fit="scale-down"
                ml={[0, 0, 0, "50px"]}
            />
            <Box
                fontSize="50px"
                mr={["10px", "10px", "50px"]}
                ml={["10px", "10px", "50px"]}
                mt={["20px", "20px", "20px", 0]}
                w={["auto", "auto", "700px", "850px"]}
            >
                <Heading fontFamily="Permanent Marker" mb="15px" textAlign={["center", "center", "center", "justify"]}>
                    Tristan Derez
                </Heading>
                <Text fontFamily="Anonymous Pro" fontSize="20px" textAlign={["left", "left", "left", "justify"]}>
                    Bonjour ! Suite à l'apprentissage en autodidacte du développement Front-End sur
                    <AboutMeLink href="https://codecademy.com" color={textlink}>
                        Codecademy
                    </AboutMeLink>
                    , je me lance dans une formation
                    <AboutMeLink href="https://openclassrooms.com" color={textlink}>
                        OpenClassrooms
                    </AboutMeLink>{" "}
                    en alternance pour consolider et faire certifier mes connaissances.
                    <br />
                    Je cherche donc une alternance d'un an, au rythme de 3-4 jours par semaine en entreprise.
                </Text>
            </Box>
        </Flex>
    );
};

const AboutMeLink = ({ children, ...props }) => {
    return (
        <chakra.a
            cursor="pointer"
            padding="8px"
            _hover={{
                backgroundImage: "url('/images/trace-peinture-orange.png')",
                backgroundSize: "cover",
                backgroundRepeat: "round",
                fontWeight: "bold",
                color: "black",
            }}
            {...props}
        >
            {children}
        </chakra.a>
    );
};

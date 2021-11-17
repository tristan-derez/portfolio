import "@fontsource/permanent-marker";
import "@fontsource/anonymous-pro";

import {
    Box,
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
            h="100vh"
            w="100vw"
            spacing="25px"
            flexDirection={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="center"
            mt={["20px", "20px", 0]}
            {...props}
        >
            <Image
                borderRadius="full"
                boxSize={[250, 400]}
                src="https://i.ibb.co/9nm1rw7/download20210300011044.png"
                alt="Profile pic"
                fit="scale-down"
                ml={[0, 0, "50px"]}
            />
            <Box
                fontSize="50px"
                mr={["10px", "10px", "50px"]}
                ml={["10px", "10px", "50px"]}
                mt={["20px", "20px", 0]}
                w={["auto", "auto", "700px", "800px"]}
                textAlign={["center", "center", "justify"]}
            >
                <Heading fontFamily="Permanent Marker" mb="15px">
                    Tristan Derez
                </Heading>
                <Text fontFamily="Anonymous Pro" fontSize="20px">
                    Bonjour ! Suite à l'apprentissage en autodidacte du développement Front-End avec{" "}
                    <AboutMeLink href="https://codecademy.com" color={textlink}>
                        Codecademy
                    </AboutMeLink>
                    , je me lance dans une formation{" "}
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

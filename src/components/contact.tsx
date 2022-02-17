import "@fontsource/anonymous-pro";

import {
    Button,
    Flex,
    HStack,
    Heading,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { HeaderComponent } from "./header";

export const Contact = (props: any) => {
    const toast = useToast();
    const background = useColorModeValue("orange.400", "orange.600");
    return (
        <Flex direction={["column", "column", "column", "row"]}>
            <HeaderComponent />
            <Stack
                h={["300px", "300px", "400px", "100vh"]}
                w={["100%", "100%", "100%", "50%"]}
                alignItems="center"
                justifyContent="center"
                {...props}
            >
                <Image
                    mt={["50px", "50px", "50px", 0]}
                    ml={[0, 0, 0, "50px"]}
                    src="/images/undraw_opinion.svg"
                    boxSize={["150px", "250px", "400px", "800px"]}
                />
            </Stack>
            <Stack
                h={["300px", "450px", "450px", "100vh"]}
                w={["100%", "100%", "100%", "50%"]}
                fontFamily="Anonymous Pro"
                alignItems="center"
                justifyContent="center"
            >
                <Heading mb="50px">Contactez-moi</Heading>
                <CustomToast />
                <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                <Flex direction={["column", "column", "column", "row"]}>
                    <HStack mt="50px" alignItems="center" justifyContent="center" w="300px">
                        <Link href="https://www.linkedin.com/in/tristan-derez/" isExternal>
                            <Icon as={FaLinkedin} w={8} h={8} />
                        </Link>
                        <Link href="https://github.com/dreyzu" isExternal>
                            <Icon as={FaGithub} w={8} h={8} />
                        </Link>
                        <Link href="https://www.twitter.com/doreizu" isExternal>
                            <Icon as={FaTwitter} w={8} h={8} />
                        </Link>
                        <Link href="mailto:tristan.derez@gmail.com" isExternal>
                            <Icon as={FiMail} w={8} h={8} />
                        </Link>
                    </HStack>
                </Flex>
            </Stack>
        </Flex>
    );
};

const mail = "tristan.derez@gmail.com";

function CustomToast() {
    const toast = useToast();
    return (
        <Button
            id="copy"
            mt="50px"
            onClick={() => {
                navigator.clipboard.writeText(mail);
                toast({
                    position: "bottom-right",
                    render: () => (
                        <Button color="white" padding={6} bg="#4BB543" margin="10px">
                            Copié dans le presse-papier &nbsp;
                            <Icon as={IoCheckmarkDoneCircleSharp} />
                        </Button>
                    ),
                    isClosable: true,
                });
            }}
            _active={{
                transform: "scale(0.98)",
                borderColor: "orange.600",
            }}
        >
            {mail}
        </Button>
    );
}

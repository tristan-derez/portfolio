import "@fontsource/anonymous-pro";

import { Box, Center, Heading, Image, Link, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { data } from "../data/data.js";

export const ProjectContainer = () => {
    return (
        <Spacer h="100%" w="auto" fontFamily="Anonymous Pro">
            <Heading>
                <Center fontFamily="Anonymous Pro">Projets</Center>
            </Heading>
            <Wrap spacing="40px" margin="30px" justify="center">
                {data.map((data, index) => (
                    <ProjectItem key={index} data={data} />
                ))}
            </Wrap>
        </Spacer>
    );
};

const ProjectItem = ({ data }) => {
    return (
        <Link href={data.adress}>
            <WrapItem borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Center flexDirection="column" width={{ base: "300px", md: "350px", lg: "600px" }} minWidth="300px">
                    <Image src={data.imageUrl} alt={data.imageAlt} />
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            m="2"
                        >
                            <Center>{data.title}</Center>
                            <Center>&bull;</Center>
                            <Center>{data.stackUsed}</Center>
                        </Box>
                    </Box>
                </Center>
            </WrapItem>
        </Link>
    );
};

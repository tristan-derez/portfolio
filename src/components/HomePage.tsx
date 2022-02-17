import "../App.css";

import { Flex } from "@chakra-ui/react";

import { AboutMeContainer } from "./AboutMe";
import { FooterComponent } from "./Footer";
import { HeaderComponent } from "./Header";
import { ProjectContainer } from "./Projects";

export const HomePage = () => {
    return (
        <Flex direction="column">
            <HeaderComponent />
            <AboutMeContainer />
            <ProjectContainer />
            <FooterComponent />
        </Flex>
    );
};

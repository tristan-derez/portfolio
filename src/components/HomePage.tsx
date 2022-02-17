import "../app.css";

import { Flex } from "@chakra-ui/react";

import { AboutMeContainer } from "./aboutme";
import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { ProjectContainer } from "./projects";

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

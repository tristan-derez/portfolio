import "../App.css";

import { Flex } from "@chakra-ui/react";

import { AboutMeContainer } from "./AboutMeComponent";
import { FooterComponent } from "./FooterComponent";
import { HeaderComponent } from "./HeaderComponent";
import { InvisibleComponent } from "./InvisibleComponent";
import { ProjectContainer } from "./ProjectsComponent";

export const HomePage = () => {
    return (
        <Flex direction="column">
            <HeaderComponent />
            <AboutMeContainer />
            <InvisibleComponent />
            <ProjectContainer />
            <FooterComponent />
        </Flex>
    );
};

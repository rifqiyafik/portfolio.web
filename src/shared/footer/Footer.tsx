import { FC } from "react";

import { Box, Heading, Flex, Text } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { PageHeader } from "shared/page-header/PageHeader";
import { onMailTo } from "utils/Functions";
import { Socials } from "shared/socials/Socials";

const headerStyles = {
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    isTruncated: true,
    fontSize: { base: "2xl", md: "3xl" },
    _hover: { color: "primary.500" },
    _active: { color: "primary.500" },
};

export const Footer: FC = () => {
    return (
        <>
            <PageHeader label="SAY HI" />
            <Flex pb="2" gap="3" overflow="hidden" alignItems="center">
                <Heading {...headerStyles} onClick={onMailTo} fontSize="2xl">
                    {configs.common.email}
                </Heading>
            </Flex>
            <Text>
                Whether you'd like to learn more about my journey as a Software Engineer or simply start a conversation,
                I'd love to hear from you. Cheers! ✌️
            </Text>
            <Box pt="16">
                <Socials delay={100} exclude={["mail"]} />
            </Box>
            <Flex
                pt="4"
                pb="2"
                fontSize="sm"
                color="gray.500"
                justifyContent={{ base: "center", md: "space-between" }}
                direction={{ base: "column", md: "row" }}
            >
                <Text>
                    This site is hand-crafted, with care by{" "}
                    <Text
                        as="a"
                        href="https://github.com/hrishikeshpaul"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary.500"
                        _hover={{ textDecoration: "underline" }}
                        cursor="pointer"
                    >
                        Hrishikesh Paul
                    </Text>{" "}
                    and modified by me.
                </Text>
                {/* <Text>This site is hand-crafted, with care by Hrishikesh Paul and modify by me.</Text> */}
                <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
            </Flex>
        </>
    );
};

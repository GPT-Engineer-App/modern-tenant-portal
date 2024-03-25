import React from "react";
import { Box, Flex, VStack, Heading, Text, Button, Spacer, IconButton, Menu, MenuButton, MenuList, MenuItem, Image, useMediaQuery } from "@chakra-ui/react";
import { FaHome, FaFileAlt, FaMoneyBillAlt, FaTag, FaExclamationCircle, FaEnvelope, FaTshirt, FaList, FaFolder, FaBars } from "react-icons/fa";

const Index = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const menuItems = [
    { label: "My Page", icon: FaHome },
    { label: "Agreements", icon: FaFileAlt },
    { label: "Rent Notices", icon: FaMoneyBillAlt },
    { label: "Offers", icon: FaTag },
    { label: "Error Reports", icon: FaExclamationCircle },
    { label: "Mailings", icon: FaEnvelope },
    { label: "Laundry Booking", icon: FaTshirt },
    { label: "Queues", icon: FaList },
    { label: "Documents", icon: FaFolder },
  ];

  return (
    <Flex h="100vh">
      {!isMobile ? (
        <Box w="250px" bg="blue.500" p={4} color="white">
          <VStack align="stretch" spacing={6}>
            {menuItems.map(({ label, icon: Icon }) => (
              <Button key={label} leftIcon={<Icon />} variant="ghost" justifyContent="flex-start">
                {label}
              </Button>
            ))}
          </VStack>
        </Box>
      ) : (
        <Menu>
          <MenuButton as={IconButton} icon={<FaBars />} variant="outline" colorScheme="blue" m={2} />
          <MenuList>
            {menuItems.map(({ label, icon: Icon }) => (
              <MenuItem key={label} icon={<Icon />}>
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}

      <Box flex={1} p={8} bg="gray.100">
        <Flex align="center" mb={8}>
          <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTEzNjkwODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" boxSize="50px" mr={4} />
          <Heading size="lg">Welcome to Tenant Portal</Heading>
          <Spacer />
          <Text>Landlord Name</Text>
        </Flex>

        <Box bg="white" p={6} mb={8} borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>
            Unpaid Rent Notices
          </Heading>
          {/* Add unpaid rent notices content */}
          <Button colorScheme="blue">View Notices</Button>
        </Box>

        <Flex>
          <Box bg="white" p={6} mr={4} borderRadius="md" boxShadow="md" flex={1}>
            <Heading size="md" mb={4}>
              Latest Mailings
            </Heading>
            {/* Add latest mailings content */}
            <Button colorScheme="blue">View Mailings</Button>
          </Box>

          <Box bg="white" p={6} borderRadius="md" boxShadow="md" flex={1}>
            <Heading size="md" mb={4}>
              Latest Error Reports
            </Heading>
            {/* Add latest error reports content */}
            <Button colorScheme="blue">View Reports</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;

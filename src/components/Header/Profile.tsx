import React from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Leal</Text>
          <Text color="gray.300" fontSize="small">
            danielleal94@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="DANIEL LEAL"
        src="https://github.com/daniel-leal.png"
      />
    </Flex>
  )
}

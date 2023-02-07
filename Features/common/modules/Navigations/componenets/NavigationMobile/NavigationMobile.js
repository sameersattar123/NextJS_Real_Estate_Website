import { Box, Flex , Text} from '@chakra-ui/react'
import Link from 'next/link'
import {HiHomeModern} from "react-icons/hi2"
import { NavigationConsts } from '../../NavigationConsts'
import React from 'react'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MenuItem } from '@chakra-ui/react'

const NavigationMobile = () => {
  return (
    <Box
    color="blue.600"
    padding='2rem'
    backgroundColor="white"
    display={{base: "block" , md:"none"}}
    >
        <Flex alignItems="center" justifyContent="space-between">
            <Link href="/">
                <Box display="flex" gap="2" alignItems="center">
                    <HiHomeModern size="30"  />
                    <Text fontSize="2xl" fontWeight="black" >
                        CASAZ
                    </Text>
                </Box>
            </Link>
            <Menu>
                <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon/>}
                variant="outline"
                />
                    <MenuList>
            {
                NavigationConsts.map((item)=>(
                    <NavigationLinks key={item.title} {...item} />
                ))
            }
                    </MenuList>
            </Menu>
        </Flex>
    </Box>
  )
}

export default NavigationMobile;

const NavigationLinks = ({title , link , icon}) =>{
    return (
        <Link href={link}>
        <MenuItem alignItems="center" gap="0.5rem">
            {icon}
            {title}
        </MenuItem>
        </Link>
    )
}

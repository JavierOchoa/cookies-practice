import NextLink from 'next/link';

import { AppBar, Link, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
        <Toolbar>
            <NextLink href="/" passHref>
                <Link>
                    <Typography variant='h6' color="white">CookieMaster</Typography>
                </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}

import { ChangeEvent, FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next'
import {useRouter} from "next/router";
import {Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from '@mui/material';

import Cookies from 'js-cookie';
import axios from 'axios';

import { Layout } from '../components/layouts';


interface Props {
    theme: string;
}

const Home: FC<Props> = ({ theme }) => {

    const [currentTheme, setCurrentTheme] = useState(theme);
    const [localStorageInformation, setLocalStorageInformation] = useState('');
    const [cookiesInformation, setCookiesInformation] = useState('');

    const router = useRouter()

    const onThemeChange = ( event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value;

        setCurrentTheme( selectedTheme );

        localStorage.setItem('theme', selectedTheme );
        Cookies.set('theme', selectedTheme );
    }

    const onClick = async() => {
        await axios.get('/api/hello');
        router.reload();

    }

    useEffect(() => {

        setLocalStorageInformation( localStorage.getItem('theme') || '' );
        setCookiesInformation( Cookies.get('theme') || '' );

    }, [])


    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Theme</FormLabel>
                        <RadioGroup
                            value={ currentTheme }
                            onChange={ onThemeChange }
                        >
                            <FormControlLabel value='light' control={ <Radio /> } label="Light" />
                            <FormControlLabel value='dark' control={ <Radio /> } label="Dark" />
                            <FormControlLabel value='custom' control={ <Radio /> } label="Custom" />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        onClick={ onClick }
                    >
                        Request new theme
                    </Button>
                </CardContent>
            </Card>
            <div style={{marginTop: '2rem'}}>
                <Typography variant={"h3"}>Information</Typography>
                <p>localStorage: {localStorageInformation}</p>
                <p>Cookies: {cookiesInformation}</p>
            </div>
        </Layout>
    )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme = 'light', name = 'No name' } = req.cookies;
    const validThemes = ['light','dark','custom'];


    return {
        props: {
            theme: validThemes.includes( theme ) ? theme : 'dark',
            name,
        }
    }
}


export default Home

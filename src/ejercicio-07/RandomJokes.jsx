import React, { useState } from 'react';
import { getRandomJoke } from './services/axiosServices';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider, Box, Container } from '@mui/material';
import { ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        custom: {
            main: '#ffaa00',
        },
        customDark: {
            main: '#ff5400'
        }
    }
});

const RandomJokes = () => {

    const [joke, setJoke] = useState(null);
    const [likedCount, setLikedCount] = useState(0);
    const [dislikedCount, setDislikedCount] = useState(0);

    const obtainJoke = () => {
        getRandomJoke()
            .then(response => {
                console.log('Generating random joke...')
                setJoke(response.data.value)
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const like = () => {
        console.log('You liked a joke!');
        setLikedCount((likedCount) => {
            return likedCount += 1
        })
    }

    const dislike = () => {
        console.log('You disliked a joke. Chuck Norris is coming for you');
        setDislikedCount((dislikedCount) => {
            return dislikedCount += 1
        })
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh'}}>
            <ThemeProvider theme={theme} >
                { joke != null
                    ? 
                    (
                        <>
                            <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                                <Box maxWidth='md' minWidth='700px' sx={{
                                    my: 2,
                                    p: 2,
                                    backgroundColor: '#e9ecef',
                                    border: 'none',
                                    borderRadius: '10px'
                                }}>
                                    <h4>{joke}</h4>
                                </Box>
                                <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <ButtonGroup>
                                        <Button 
                                            onClick={like}
                                            color='success' 
                                            variant='contained'
                                        >
                                            <ThumbUpAlt />
                                        </Button>
                                        { likedCount > 0 
                                            ? <Button color='success'>{likedCount}</Button> 
                                            : null
                                        }
                                    </ButtonGroup>
                                    <Button
                                        onClick={obtainJoke}
                                        variant='contained'
                                        color='custom'
                                        size='large'
                                    >
                                        Tell me a new Joke
                                    </Button>
                                    <ButtonGroup>
                                        { dislikedCount > 0 
                                            ? <Button color='error'>{dislikedCount}</Button> 
                                            : null
                                        }
                                        <Button 
                                            onClick={dislike}
                                            color='error' 
                                            variant='contained'
                                        >
                                            <ThumbDownAlt />
                                        </Button>
                                    </ButtonGroup>
                                </Container>
                            </Container>
                        </>
                    )
                    :
                    (
                        <>
                            <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                                <Box maxWidth='sm' sx={{
                                    my: 2,
                                    p: 2
                                }}>
                                    <h3>Don't Press the Button</h3><img src='https://gifdb.com/images/thumbnail/south-park-please-dont-do-it-re9hp7t6x1fo8ibh.gif' alt="Don't click below" style={{maxWidth: '500px'}}/>
                                    
                                </Box>
                                <Button 
                                    onClick={obtainJoke}
                                    variant="contained"
                                    color='customDark'
                                    size='large'
                                >
                                    Tell me a Joke
                                </Button>
                            </Container>
                        </>
                    )
                }
            </ThemeProvider>
        </div>
    );
}

export default RandomJokes;

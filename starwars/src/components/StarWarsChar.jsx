import React, {useState, useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';
import CharacterCard from './CharacterCard';



const StarWarsChar = () => {
    let key = 0;
    const [starWarsCharacters, setStarWarsCharacters] = useState([]);
    useEffect( () => {
        const handleAPIRequest = () => {
            axios.get('https://swapi.co/api/people')
            .then(response => {
                console.log(response.data);
                setStarWarsCharacters(response.data.results);
            })
            .catch(err => console.log(err));
        }
        handleAPIRequest();
    },[]);
    return(
        <MainContainer>
            {starWarsCharacters.map( character =>  <CharacterCard characterData={character} key={key++}/> )}
        </MainContainer>
    );
}

export default StarWarsChar;

const MainContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
`;

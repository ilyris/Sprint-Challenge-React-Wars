import React, {useState, useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';
import CharacterCard from './CharacterCard';



const StarWarsChar = () => {
    let key = 0;
    const [starWarsCharacters, setStarWarsCharacters] = useState([]);
    const [searchField, setSearchField] = useState('');


    const handleChange = (event) => {
          setSearchField(event.target.value);
    }
    const handleSearch = event => {
        event.preventDefault();
        let cardTitles = document.querySelectorAll('h2');
        cardTitles.forEach( titles =>  {
            if(searchField === titles.title ) {
                console.log(titles.title);
            }
        });

    }

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
        <Form>
            <StyledInput type="text" onChange={handleChange} value={searchField} />
            <StyledButton onClick={handleSearch}>Search</StyledButton>
        </Form>
            {starWarsCharacters.map( character =>  <CharacterCard characterData={character} key={key++} handleSearch={handleSearch}/> )}
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
const Form = S.form`
    width: 100%;
    display: flex;
    flex-direction: row;
`;
const StyledInput = S.input`
    width: 400px;
    font-size: 20px;
`;
const StyledButton = S.button`
    padding: 10px 20px;
    font-size: 20px;
    border: none;
    background-color: #000;
    color: #fff;
`;
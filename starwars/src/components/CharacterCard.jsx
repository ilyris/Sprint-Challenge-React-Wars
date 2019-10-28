import React, {useState, useEffect} from 'react';
import S from 'styled-components';
import axios from 'axios';



const CharacterCard = ({characterData}) => {
    const {name, height, gender, birth_year, homeworld} = characterData;
    const [characterHomeWorld, setCharacterHomeWorld] = useState([]);
useEffect( () => {
    axios.get(`${homeworld}`).then(res => setCharacterHomeWorld(res.data.name)).catch(err => console.log(err));
}, []);
        return(
            <CardContainer>
                <CardTitle>Name: {name}</CardTitle>
                <CardTextContent>Height: {height}</CardTextContent>
                <CardTextContent> Gender: {gender}</CardTextContent>
                <CardTextContent> Birth Year: {birth_year}</CardTextContent>
                <CardTextContent> HomeWorld: {characterHomeWorld}</CardTextContent>
            </CardContainer>
        );
}

export default CharacterCard;

const CardContainer = S.div`
    width: 300px;
    background-color: #d6d6d6;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;
const CardTitle = S.h2`
    font-size: 20px;
    letter-spacing: 2px;
`;
const CardTextContent = S.p`
    font-size: 16px;
`;
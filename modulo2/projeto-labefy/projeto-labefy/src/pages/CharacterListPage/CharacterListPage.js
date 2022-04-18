import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { characterCard } from "./atyled";

export default class CharacterListPage extends React.Component {
  state = {
    characterList: []
  }

  componentDidMount() {
    this.getCharacterList();
  }

  getCharacterList = () => {
    axios.get(`${BASE_URL}/characters`)
    .then((res) => this.setState({ characterList: res.data.result }))
    .catch((err) => console.log(err));
  }


  render() {
    const character = this.state.characterList.map((character) => {
      return (
        <characterCard key={character.id}>
          <h1>{character.name}</h1>
          <p>{character.description}</p>
        </characterCard>
      );
    })



    console.log(this.state.characterList);
    return <div>{character}</div>;
  }
}

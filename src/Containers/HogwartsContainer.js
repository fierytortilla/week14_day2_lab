import React, {Component} from 'react';
import CharacterSelector from '../Components/CharacterSelector.js';
import CharacterDetail from '../Components/CharacterDetail.js';

class HogwartsContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            characters:[],
            selectedCharacter: ''
        };
        this.handleCharacterSelected= this.handleCharacterSelected.bind(this);
    }

    handleCharacterSelected(characterName){
        this.setState({selectedCharacter:characterName})
    }

    componentDidMount(){
        const url = "https://hp-api.herokuapp.com/api/characters";
        fetch(url)
          .then(response=> response.json())
          .then(characters=>this.setState({characters: characters}))
          .catch(error=>console.err(error))
    }

    render(){
        const selectedCharacter = this.state.characters.find(
            character=> character.name === this.state.selectedCharacter
        )
        // console.log(selectedCharacter);
        return(
            <div>
                <h2 id="harryPotterTitle">Characters of Harry Potter</h2>
                <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
                <CharacterDetail character={selectedCharacter} />
            </div>
        );
    }
}

export default HogwartsContainer;
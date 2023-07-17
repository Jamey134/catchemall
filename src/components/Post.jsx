import React, {useState} from 'react';
import axios from 'axios'

const Post = () => {
    const [pokeList, setPokeList] = useState([])
    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then((res) => {
                setPokeList(res.data.results)
            }
            )
    }
    return (
        <div>
            <h1>List of Pokemon</h1>
            <button onClick={getPokemon}>CatchEmAll</button>
            {pokeList.map((pokemon, index) => {
                return (
                    <div key={index}>{pokemon.name}</div>
                )
            }
            )}

        </div>
    )
}

export default Post;
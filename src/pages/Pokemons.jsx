
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pokemons = () => {

    const [ pokemons, setPokemons ] = useState([])
    const [ pages, setPages ] = useState({})
    const [ url, setUrl ] = useState("https://pokeapi.co/api/v2/pokemon")

    useEffect( () => {

        axios
        .get(url)
        .then(resp => {
            setPokemons([ ...pokemons, ...resp.data.results ])
            setPages( {
                prev : resp.data.previous,
                next : resp.data.next
            } )
        })
        .catch( error => console.error(error) )

    }, [ url ] )




    return (
        <div className="pokemons-view">
            <h1>LISTA DE POKEMONS</h1>
            <ul>
                {
                    pokemons?.map( (pokemon, index) => {
                     return <li key={index}>
                            <Link to={`/pokemons/${pokemon?.name}`}>
                                {pokemon.name} {pokemon?.id}
                            </Link>
                        </li>
                    }
                     )
                }
            </ul>
            {/*
            <button 
            onClick={ () => setUrl( pages.prev ) }
            disabled={ pages.prev ? false : true }
            >
                Previo</button>
            <button 
            onClick={ () => setUrl( pages.next ) }
            disabled={ !pages.next }
            >
            Siguiente</button>
            */}

            <button onClick={() => setUrl(pages.next)}>Cargar mas</button>
        </div>
    )
}

export default Pokemons
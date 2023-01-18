
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const PokemonDetail = () => {

    const [ data, setData ] = useState({})
    const { name } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(resp => setData(resp.data))

    }, [name])

    return(
        <div className="pokemon-detail-view">
            <Link to="/">Regresar al home</Link>
            <button onClick={ () => navigate(-1) }>Ir atras</button>
            
            <h1>{data?.name}</h1>
            <img src={data.sprites?.other["official-artwork"].front_default} alt="" />
        </div>
    )
}

export default PokemonDetail

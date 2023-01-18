
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="home-view">
            <Link to="/pokemons">
                <button>Ir al listado de pokemons</button>
            </Link>
        </div>
    )
}

export default Home
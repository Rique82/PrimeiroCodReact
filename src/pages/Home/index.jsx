import './style.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
            <main>
                MEU CONTEUDO

                <Link to='/about' >
                    <button type='button'>Navegar</button>
                </Link>
            </main>
        </>
    )
}

export default Home
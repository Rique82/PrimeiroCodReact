import './style.css'

function Header( { titulo } ){
    return(
        <>
            <header>
                <h1>{ titulo ? titulo : 'minha pagina react' }</h1>
            </header>
        </>
    )
}

export default Header
const AnotherComponent = () => {

    const handleClick = () => {

        window.alert("clicou no botão!")

    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => alert("teste")}>Evento de elemento</button>
        </div>
    )
}


export default AnotherComponent;
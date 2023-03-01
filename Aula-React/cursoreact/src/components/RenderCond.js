const RenderCond = ({ x }) => {

    return (
        <div>
            {x > 5 && <p>x é maior que 5</p>}
            {x > 5 ? <p>x é um numero alto</p> : <p>x é um numero baixo</p>}
        </div>
    )
}

export default RenderCond;
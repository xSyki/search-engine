function Result({ result }) {

    const { title, description, url } = result;

    return (
        <div className="result">
            <a href={url} className="result__url"><h2 className="result__title">{title}</h2></a>
            <p className="result__description">{description}</p>
        </div>
    )
}

export default Result;
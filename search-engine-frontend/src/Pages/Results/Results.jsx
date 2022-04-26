import { useEffect } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

import Result from './Result/Result';

import exampleResults from '../../exampleDataResults';

function Results() {

    const navigate = useNavigate();

    const { searchParam } = useParams();

    const [searchText, setSearchText] = useState(searchParam);
    const [results, setResults] = useState();

    const submitSearch = (e) => {
        e.preventDefault();

        if (!searchText) return;
        navigate(`/${searchText}`)
    }

    useEffect(() => {
        setResults(exampleResults);

        // fetch(`https://falonsearch.com/${searchParam}`)
        // .then(response => response.json())
        // .then(data => setResults(data));
    }, [])

    return (
        <div className="results">
            <div className="results__top-bar top-bar">
                <h1 className='top-bar__title' onClick={() => navigate('/')}>Falon Search</h1>
                <div className='top-bar__search'>
                    <form className="top-bar__search-bar" onSubmit={(e) => submitSearch(e)}>
                        < FaSearch className='top-bar__icon' />
                        <input className="top-bar__input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    </form>
                    <button className='top-bar__submit-btn' onClick={submitSearch}>Search</button>
                </div>
            </div>
            <div className="results__section">
                {results && results.map(result => {
                    return (
                        <Result result={result} key={result.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default Results;

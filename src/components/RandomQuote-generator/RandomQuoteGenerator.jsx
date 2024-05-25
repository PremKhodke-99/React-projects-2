import React, { useEffect, useState } from 'react'
import "./quote.css"

function RandomQuoteGenerator() {

    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState(null);

    async function fetchQuote() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://api.quotable.io/quotes/random', {
                method: 'GET'
            });
            const result = await apiResponse.json();

            console.log(result);

            if (result && result.length > 0) {
                setQuote(result[0]);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote();
    }, [])

    function handleRefresh() {
        fetchQuote();
    }

    return (
        <div className='random-quote-generator'>
            <h1>Random Quote Generator</h1>
            {
                loading ? <h3>Loading PLease Wait!</h3> : (
                    <div className='quote-wrapper'>
                        <p>{quote?.author}</p>
                        <p>{quote?.content}</p>
                    </div>
                )
            }
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}

export default RandomQuoteGenerator
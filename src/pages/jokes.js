import { useEffect, useState } from "react";
import Card from "../components/card";
import { useSearchParams } from "react-router-dom";


const Jokes = () => {
    const [jokes, setJokes] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [error, seterror] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if(!query) return;
        async function getJokes() {
            try{
                const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
                const data = await response.json();
                if(!response.ok) throw new Error('Failed to fetch jokes')
                setJokes(data.result);
                setLoading(false)
            }catch(err){
                seterror(err.message);
                setJokes([])
            }
        }
        getJokes();
    
    }, [query])

    

    return ( 
        <main>
            <section className="counter">
                <h1>Laughter galore....</h1>
                <p className="subTopic">Entertain yourself with different categories of Chuck Norris jokes</p>
            </section>
            {loading && <p className="errorMsg">Loading......</p> }
            {error &&  <p className="errorMsg">{error}</p>}  
            <section className="jokeLists">
                {jokes.length > 0 ? (jokes.map((joke) => 
                (<Card key={joke.id} joke={joke}/>) )) 
                  : ( <p className="errorMsg">{query ? "No jokes found!" : "Enter a query to search for jokes."}</p>)
                }
            </section> 
          
           
        </main>
     );
}
 
export default Jokes;
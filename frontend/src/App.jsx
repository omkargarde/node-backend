import axios from "axios";
import {useState, useEffect} from "react";

function App() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios
            .get("/api/jokes")
            .then((response) => setJokes(response.data))
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <h1>react</h1>

            <p>Jokes: {jokes.length}</p>
            {jokes.map((joke) => (
                <div key={joke.id}>
                    <h3>{joke.c}</h3>
                </div>
            ))}
        </>
    );
}

export default App;

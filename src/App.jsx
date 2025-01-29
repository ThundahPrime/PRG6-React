import { useState, useEffect } from "react";
import Album from "./Album.jsx";

function App() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the album data from the provided URL
        fetch("localhost:8888")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setAlbums(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-xl">Loading albums...</p>;
    }

    if (error) {
        return <p className="text-center text-xl text-red-500">Error: {error}</p>;
    }

    return (
        <>
            <h1 className="font-bold text-center text-3xl mb-6">Music Albums</h1>
            <section className="flex flex-wrap gap-6 justify-center">
                {albums.map((album) => (
                    <Album key={album.code} album={album} />
                ))}
            </section>
        </>
    );
}

export default App;

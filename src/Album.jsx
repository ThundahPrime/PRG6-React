function Album({ album }) {
    return (
        <article className="border-solid border-2 border-sky-500 px-6 py-4 m-3 w-60 rounded-lg bg-sky-100">
            <h1 className="text-xl font-semibold mb-4">{album.name}</h1>
            <img src={album.image} alt="Album Cover" className="w-full h-auto" />
        </article>
    );
}

export default Album;
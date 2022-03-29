import React, {useLayoutEffect} from 'react'

const Favorites = () => {

    useLayoutEffect(() => {
        document.title = "Favorite Notes";
    });

    return (
        <div>
            <h1>NoteX</h1>
            <h2>Your Favorite Notes!</h2>
        </div>
    )
}

export default Favorites;
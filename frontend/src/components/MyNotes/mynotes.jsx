import React, {useLayoutEffect} from 'react';

const MyNotes = () => {
    
    useLayoutEffect(() => {
        document.title = "My Notes";
    }, []);

    return (
        <div>
            <h1>NoteX</h1>
            <h2>My Notes</h2>
        </div>
    )
};

export default MyNotes;
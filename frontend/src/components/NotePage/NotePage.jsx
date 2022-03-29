import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_NOTE } from '../../constants/queries';

const NotePage = props => {
    const {id} = useParams();
    const {data, error, loading} = useQuery(GET_NOTE, {variables: {id}});
    console.log(data);
    return (
        error ? <p>An error ocurred when fetching the note. {console.log(error)}</p> 
        : loading ? <p>Loading...</p>
        : <div>
            <p>{data.note.title}</p>
        </div>
    );
};

export default NotePage;
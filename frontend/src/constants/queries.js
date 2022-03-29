import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query NoteFeed($cursor: String){
    noteFeed(cursor: $cursor){
      cursor
      hasNextPage
      notes {
        id
        createdAt
        title
        content
        favoriteCount
        author{
          username
          id
          avatar
        }
      }
    }
  }`;

  export const GET_NOTE = gql`
  query NoteFeed($id: ID!){
    note(id: $id){
        id
        createdAt
        title
        content
        favoriteCount
    }
  }`;
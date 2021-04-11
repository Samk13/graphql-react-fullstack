import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
grid-gap: 1em;

`
const Laoding = styled.div`
  font-size: 2.5em;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: palevioletred;
`
const Post = styled.div`
  width: 300px;
  height: 300px;
  margin:0 auto;
  background-color: pink;
  border-radius:8px;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: palevioletred;
`

const Header = styled.div`
  padding: 2rem;
  font-size: 2em;
`

const FETCH_POSTS_QUERY = gql`
query {getPosts{id body createdAt}}
`

export default function Home() {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY)

  if(data){
    console.log(data.get);
    console.log(error);
    console.log(loading);
  }
  return (
    <Grid>
      {loading && <Laoding>Loading ... </Laoding>}
      {data && data.getPosts.map(post => (
        <Post key={post.id}>
          <Header>
            {post.body}
          </Header>
        </Post>
      ))}
    </Grid>
  )
}

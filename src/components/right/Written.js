import React from 'react';
import '../../styles/Written.css';
import { useQuery, gql } from '@apollo/client';

const DATA = gql`
  query retrieveData($id:Int!){
      getData(id:$id)
  }
`;

function Data({id}){
  const {loading, error, data}= useQuery(DATA,{
    variables:{id},
  });
  if(loading) return null;
  if(error) return `Error! ${error}`;
  return data.getData;
};

const Written = () => (
    <div class="bullets">
        <p class="type-text"><Data id={3}/></p>
        <p class="lorem-ipsum-is-simpl"><Data id={1}/></p>
	</div>
);

export default Written;
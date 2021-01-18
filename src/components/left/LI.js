import React from 'react';
import { useQuery, gql } from "@apollo/client";
import '../../styles/LI.css';

const DATA = gql`
  query retrieveData($id: Int!) {
    getData(id: $id)
  }
`;

function Data({ id }) {
    const { loading, error, data } = useQuery(DATA, {
      variables: { id },
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    return data.getData;
  }

const LI = () => (
    <div className="lorem">
        <p><Data id={1} /></p>
    </div>
);

export default LI;
import React from 'react';

import '../../styles/LIS.css';
import { useQuery, gql } from "@apollo/client";

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

const LIS = (props) => (
    <div className="lorem2">
        <p><Data id={2} /></p>
    </div>
);

export default LIS;
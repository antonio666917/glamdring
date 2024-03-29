import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Car from "./Car";
import Pagination from "./Pagination";
import { perPage } from "../config";

// TODO:  orderBy: "createdAt_DESC"
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    allItems(first: $first, skip: $skip, orderBy: "createdAt_DESC") {
      id
      name
      price
      description
      image {
        publicUrlTransformed
      }
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

function Items({ page, count }) {
  const { data, error, loading } = [{}, {}, true];
  return (
    <Center>
      <Pagination page={page} />
      {(() => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        if (!data) return <p>No cars available at the moment</p>;
        return (
          <ItemsList>
            {data.allItems.map((item) => (
              <Car car={item} key={item.id} />
            ))}
          </ItemsList>
        );
      })()}
      <Pagination page={page} />
    </Center>
  );
}

Items.propTypes = {
  page: PropTypes.number,
};

export default Items;
export { ALL_ITEMS_QUERY };

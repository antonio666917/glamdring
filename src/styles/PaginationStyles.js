import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${(props) => props.theme.lightgrey};
  & > * {
    margin: 0;
    padding: 5px 10px;
    border-right: 1px solid ${(props) => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: var(--color-gray);
    pointer-events: none;
  }
`;

export default PaginationStyles;

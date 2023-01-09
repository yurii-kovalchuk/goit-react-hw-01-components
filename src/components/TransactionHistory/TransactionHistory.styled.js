import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const TableHead = styled.thead`
  background-color: darkcyan;
  color: white;
`;

export const HeadCell = styled.th`
  padding: 10px 0;
`;

export const TableCell = styled.td`
  padding: 10px 0;
  text-align: center;
  text-transform: capitalize;
  background-color: white;
`;

export const Row = styled.tr`
  td {
    background-color: ${({ idx }) => (idx % 2 === 1 ? 'gainsboro' : 'white')};
  }
`;

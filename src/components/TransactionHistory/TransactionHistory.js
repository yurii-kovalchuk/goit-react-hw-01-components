import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadCell,
  TableCell,
  Row,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <Row key={id} idx={idx}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

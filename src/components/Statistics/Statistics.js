import PropTypes from 'prop-types';
import { Card, Title, List, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }, arrId, arr) => (
          <Item key={id} arrId={arrId} arr={arr}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Item>
        ))}
      </List>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

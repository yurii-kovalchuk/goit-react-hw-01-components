import styled from 'styled-components';

export const Card = styled.div`
  width: 500px;
  margin: 50px auto;
  background-color: white;
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  padding: 30px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: ${({ arr }) => (100 / arr.length).toString()}%;
  box-sizing: border-box;
  padding: 20px 10px;
  text-align: center;
  background-color: ${({ arrId }) => getRandomHexColor(arrId)};
`;

function getRandomHexColor(value) {
  return `#${Math.floor(Math.random() * (16777215 + value)).toString(16)}`;
}

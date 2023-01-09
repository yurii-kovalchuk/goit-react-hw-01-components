import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;

export const Description = styled.div`
  padding: 40px 20px 20px;
  text-align: center;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 100px;
  background-color: white;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  color: grey;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #eff5f6;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 100px;
  text-align: center;
  border: 1px solid lightgrey;
`;

export const StatLabel = styled.span`
  margin-bottom: 5px;
  color: grey;
`;

export const StatQuantity = styled.span`
  font-weight: 700;
`;

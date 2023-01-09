import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-item: center;
  margin: 0 auto 10px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 300px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Status = styled.span`
  margin auto 0;
  width: 15px;
  height: 15px;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  object-fit: contain;
  padding-left: 20px;
`;

export const Name = styled.p`
  padding-left: 20px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

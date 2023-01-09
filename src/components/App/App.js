import user from '../../user.json';
import data from '../../data.json';
import { Wrapper } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Wrapper>
  );
};

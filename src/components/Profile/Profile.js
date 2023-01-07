import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Description,
  UserName,
  UserInfo,
  StatList,
  StatItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatList>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatItem>
      </StatList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

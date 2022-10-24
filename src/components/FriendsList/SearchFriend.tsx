import React from 'react';
import { FrList } from './interfaces';
import { SearchFr } from './FriendsListStyles';
import { Avatar, IconButton } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const SearchFriend = ({img, name, uid}:FrList) => {

  const user = useSelector(selectUser);
  const friendUID = uid;

  const addFriend = async () => {
      
  }

  return (
    <SearchFr>
        <Avatar src={img} alt='d'/>
        <div>{name}</div>
        { (user.uid === friendUID) ? null : 
        <IconButton>
          <DoneOutlinedIcon />
        </IconButton>
        }
    </SearchFr>
  )
}

export default SearchFriend
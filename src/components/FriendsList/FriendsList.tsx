import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Wrapper, Friends, FoundFriends, Header } from './FriendsListStyles';
import Search from './../Search/Search';
import { Button } from '@mui/material';
import Friend from './Friend';
import { FrList, FrListServer } from './interfaces';
import { onSnapshot, doc, where, collection, query } from 'firebase/firestore';
import db from '../../firebase';
import SearchFriend from './SearchFriend';

const FriendsList = () => {

  const user = useSelector(selectUser);

  const [search, setSearch] = useState<string>('');
  const [friends, setFriends] = useState<Array<FrList>>([]);
  const [searchFriends, setSearchFriends] = useState<Array<FrListServer>>([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", user.uid), (snapshot) => {
      const snap = snapshot.data();
      if(snap){
        setFriends(snap.userFriends.map((fr:any) => fr))
      }
    })
  }, [user.uid]);


  const test = async (searchFriends: string) => {
    onSnapshot(query(collection(db, "users"), where("userName", "==", searchFriends)), (snap) => {
      const doc = snap.docs;
      setSearchFriends(doc.map((fr:any) => fr.data()))
    });
    setSearch('')
  };

  return (
    <Wrapper>
        <h4>Friends</h4>
        <Header>
            <Search value={search} setValue={setSearch} />
            <Button onClick={() => test(search)}>Search</Button>
        </Header>
          <FoundFriends>
            {searchFriends.map((fr) => <SearchFriend img={fr.userPhoto} name={fr.userName} uid={fr.userID} />)}
          </FoundFriends>
          <Friends>
            {friends.map((fr) => <Friend img={fr.img} name={fr.name}/>)}
          </Friends>
    </Wrapper>
  )
}

export default FriendsList;
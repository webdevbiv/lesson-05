import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from 'redux/users/operations';
import { selectUsers } from 'redux/users/selectors';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  console.log('🚀 = users:', users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.user}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;

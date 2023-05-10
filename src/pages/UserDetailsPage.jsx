import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from 'redux/users/operations';
import { selectUser } from 'redux/users/selectors';
import Modal from 'components/Modal/Modal';

const UserDetailsPage = () => {
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const closeModal = () => {
    setUserId('');
  };

  return (
    <>
      {user && (
        <>
          <img alt="user avatar" src={user.avatar} />
          <div>{user.user}</div>
          <button type="button" onClick={() => setUserId(user.id)}>
            Delete
          </button>
          {userId && <Modal id={userId} closeModal={closeModal} />}
        </>
      )}
    </>
  );
};

export default UserDetailsPage;

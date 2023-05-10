import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'redux/users/operations';

const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };
  return (
    <div>
      <p>Are you sure?</p>
      <button type="button" onClick={() => handleClick(id)}>
        Yes
      </button>
      <button type="button" onClick={closeModal}>
        No
      </button>
    </div>
  );
};

export default Modal;

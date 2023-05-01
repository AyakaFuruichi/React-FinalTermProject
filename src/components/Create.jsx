import { useState } from 'react'
import { addUser } from '../redux/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }
    dispatch(addUser({id: users[users.length-1].id + 1 , name , email}));
    navigate('/');
  }
  return (
    <div className='d-flex w-full v-full justify-content-center align-items-center'>
      <div className='w-1/2 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              name='name' 
              className='form-control' 
              placeholder='enter name' 
              onChange={e => setName(e.target.value)}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name='email' 
              className='form-control' 
              placeholder='enter email'
              onChange={e => setEmail(e.target.value)}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div><br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create;

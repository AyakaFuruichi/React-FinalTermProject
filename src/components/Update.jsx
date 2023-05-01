import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(user => user.id == id)
  const { name, email } = existingUser[0];

  const [_name, setName] = useState(name);
  const [_email, setEmail] = useState(email);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    if (_name.trim() === '') {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }
    if (_email.trim() === '') {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    dispatch(updateUser({
      id: id,
      name: _name,
      email: _email
    }))
    navigate('/');
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-1/2 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              name='name' 
              className='form-control' 
              placeholder='enter name'
              value={_name}
              onChange={ e=> setName(e.target.value)}
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
              value={_email}
              onChange={ e=> setEmail(e.target.value) }
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div><br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
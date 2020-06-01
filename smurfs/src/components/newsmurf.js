import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { postSmurf } from '../actions/';


const NewSmurf = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    height: '',
    age: ''
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
    };
   
    dispatch(postSmurf(newSmurf));
    
    setSmurf({
      name: "",
      height: null,
      age: null
    });
    console.log(smurf);
  };

  return (
    <form onSubmit={submitForm}>

      <input
        type="text"
        name="name"
        value={smurf.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="height"
        value={smurf.height}
        placeholder="Enter Height"
        onChange={handleChange}
      />

      <input 
        type="text" 
        name="age" 
        value={smurf.age}
        placeholder="Enter Age" 
        onChange={handleChange} 
      />

      <button type="submit">SMURF a new SMURF</button>

    </form>
  );
}

export default connect(null, {postSmurf}) (NewSmurf) 
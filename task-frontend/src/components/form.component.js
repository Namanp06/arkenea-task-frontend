import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/style.css";
import { useNavigate } from 'react-router-dom';
var userService=  require("../services/user.service");

export default function FormComponent() {
  

  const navigate = useNavigate();

  const  [state, setState] = useState({
    firstName:"",
    lastName:"",
    email: "",
    phoneNumber:"",
  });
   const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = ( event) => {
    event.preventDefault();
    state.image= selectedImage;

    let formData = new FormData();
    formData.append("firstName", state.firstName);
    formData.append('lastName', state.lastName);
    formData.append('email', state.email);
    formData.append('phoneNumber', state.phoneNumber);
    formData.append('my_image', selectedImage);
    console.log('hii', state);
  
    let res = userService.createUser(formData).then((response)=>{
      console.log('Hyyyyy',response);
    if(response.status=="200"){alert("done"); navigate('/');}
    else alert("something went wrong");
    })
  };

  return (
    <div className="App">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="form-control">
          <label>Image Upload</label>
          <input
            type="file"
            name="my_image"
            value={state.my_image}
            onChange={(event)=>handleInputChangeForImage}
          />
        </div> */}
        <div className="form-control">
          <label>Image Upload</label>
          <input
            type="file"
            name="my_image"
            value={state.my_image}
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}


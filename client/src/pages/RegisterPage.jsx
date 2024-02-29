import React, { useState } from "react";
import "../styles/Register.scss";

const  RegisterPage= () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const {name,value,files} = e.target;
    setFormData({
        ...formData,
        [name] : value,
        [name] : name === "profileImage" ? files[0] : value,
    })
  }

  // console.log(formData);

  return (
    <div className="register">
      <div className="register_content">
        <form action="" className="register_content_form">
          <input
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            required
          />

          <input onChange={handleChange} type="text" placeholder="Last Name" value={formData.lastName} name="lastName" required />

          <input onChange={handleChange} type="email" placeholder="Email" name="email" value={formData.email} required />

          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            required
          />

          <input
          onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            required
          />

          <input
          onChange={handleChange}
            type="file"
            id="image"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
          />

          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Profile Pic</p>
          </label>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}

          <button type="submit">Register</button>
        </form>
        <a href="/login">Already have an account Log In Here</a>
      </div>
    </div>
  );
}

export default RegisterPage;

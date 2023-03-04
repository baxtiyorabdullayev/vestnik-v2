import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../context";
import "./Registration.css";

function Registration() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [middle_name, setMiddle_name] = useState("");
  const [initials, setInitials] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [photo, setPhoto] = useState("");

  return (
    <div className="registration">
      <form>
        <input
          name="username"
          value={username}
          type="text"
          placeholder="User Name"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="password1"
          value={password1}
          type="password"
          placeholder="password1"
          required
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          name="password2"
          value={password2}
          type="password"
          placeholder="password2"
          required
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input
          name="email"
          value={email}
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="first_name"
          value={first_name}
          type="text"
          placeholder="first_name"
          required
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <input
          name="last_name"
          value={last_name}
          type="text"
          placeholder="last_name"
          required
          onChange={(e) => setLast_name(e.target.value)}
        />
        <input
          name="middle_name"
          value={middle_name}
          type="text"
          placeholder="middle_name"
          required
          onChange={(e) => setMiddle_name(e.target.value)}
        />
        <input
          name="initials"
          value={initials}
          type="text"
          placeholder="initials"
          required
          onChange={(e) => setInitials(e.target.value)}
        />
        <input
          name="gender"
          value={gender}
          type=""
          placeholder="gender"
          required
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          name="specialization"
          value={specialization}
          type=""
          placeholder="specialization"
          required
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <input
          name="affiliation"
          value={affiliation}
          type=""
          placeholder="affiliation"
          required
          onChange={(e) => setAffiliation(e.target.value)}
        />
        <input
          name="country"
          value={country}
          type=""
          placeholder="country"
          required
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          name="phone_number"
          value={phone_number}
          type=""
          placeholder="phone_number"
          required
          onChange={(e) => setPhone_number(e.target.value)}
        />
        <input
          name="photo"
          value={photo}
          type=""
          placeholder="photo"
          required
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();

            const newUser = {
              username,
              password1,
              password2,
              email,
              first_name,
              last_name,
              profile: {
                middle_name,
                initials,
                gender,
                specialization,
                affiliation,
                country,
                phone_number,
                photo,
              },
            };
            dispatch({ type: "registration", payload: newUser });
            {
              console.log(newUser);
            }
            axios.post("https://vestnik.tiu-edu.uz/api/v1/register/", newUser);
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Registration;

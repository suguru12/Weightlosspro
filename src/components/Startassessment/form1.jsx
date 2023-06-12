import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form1()
{

const MyForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    dateOfBirth: '',
    gender: ''
  });}

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.gender === 'male') {
      // Redirect to male form
      history.push('/body'); // Replace '/male-form' with the actual path of the male form page
    } else if (formData.gender === 'female') {
      // Redirect to female form
      history.push('/section'); // Replace '/female-form' with the actual path of the female form page
    } else {
      // Handle other genders or no gender selected
      console.log('Handle other genders or no gender selected');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="text"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === 'other'}
          onChange={handleChange}
        />
        Other
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};


export default Form1;
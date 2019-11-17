import React, { useState } from 'react';

const initialForm = {
  name: "",
  email: "",
  role: ""
}

function Form({teamMembers, addTeamMember}) {
  const [formInput, setFormInput] = useState(initialForm);

  const handleFormInput = event => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    //newList to add old array and new member object
    const newList = teamMembers.concat(formInput);
    addTeamMember(newList);

    //reset the input fields
    setFormInput(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id="name"
        onChange={handleFormInput}
        value={formInput.name}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="name"
        onChange={handleFormInput}
        value={formInput.email}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="name"
        onChange={handleFormInput}
        value={formInput.role}
      />
      
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
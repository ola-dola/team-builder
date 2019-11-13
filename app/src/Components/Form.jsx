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

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        onChange={handleFormInput}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={handleFormInput}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        onChange={handleFormInput}
      />
      
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
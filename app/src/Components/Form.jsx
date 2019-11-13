import React from 'react';

function Form(props) {
  return (
    <form>
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
    </form>
  )
}

export default Form;
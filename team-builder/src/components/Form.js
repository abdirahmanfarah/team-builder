import React, { useState, useEffect} from "react";

const Create = props => {

  const initialMember = { name: "", email: "", role: ""};

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setNewMember({...newMember, [event.target.name] :event.target.value});
  };

  // const handleEmailChange = event => {
  //   setNewMember({...newMember, email: event.target.value});
  // };

  // const handleRoleChange = event => {
  //   setNewMember({...newMember, role: event.target.value});
  // };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newMember);

    props.setMember([
      ...props.member, newMember
    ]);
    
    setNewMember(initialMember);
  };

  

  return (
      <form onSubmit ={handleSubmit}>
        {/* name: {handleChange} */}
        <input type = "text" name = "name" onChange ={handleChange} placeholder="Name" 
        value = {newMember.name}
        />

        {/* email: {handleChange} */}
        {/* <textarea name = "email" onChange = {handleChange} placeholder = "Email" /> */}

       <input  name = "email" onChange = {handleChange} placeholder = "Email"
       value = {newMember.email}
       />
        {/* role: {handleChange} */}

        {/* <textarea name = "role" onChange = {handleChange} placeholder="Role"/> */}

        <input name = "role" onChange = {handleChange} placeholder = "Role" 
        value = {newMember.role}
        />

        <button>
          Add Member
        </button>
      </form>
  )
}
export default Create;

import React, { useState, useEffect} from "react";

const Create = props => {

  const [member, setMember] = useState();

  const handleTextChange = event => {
    setMember(event.target.value);
  }
  return (
      <form className="form-list">
        Member: { member }
        <input type = "text" onChange ={handleTextChange}></input>
        <button>
          Add Member
        </button>
      </form>
  )
}
export default Create;

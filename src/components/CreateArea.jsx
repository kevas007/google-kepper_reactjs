import React, { useState } from "react";

function CreateArea(props) {
  let [note, setNote] = useState({
    title: "",
    content:""
  });

  function envoyer(event){

    props.onAdd(note )
    setNote({
      title: "",
      content:""
    })
    event.preventDefault();
  }

  function handleChange(event) {
      let {name, value} = event.target;

      setNote(prevNote =>{
        return{
          ...prevNote,
          [name]: value
        }
      })
  }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange}  value={note.title} placeholder="Title" />
        <textarea onChange={handleChange}
        name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={envoyer}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

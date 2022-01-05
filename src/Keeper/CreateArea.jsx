import React, { useState } from "react";
import '../styles.css'

function CreateArea(props) {

  const [note,setNote] = useState({
    title: '',
    content: ''
  })

  const [disable,setDisable] = useState(true)

  const handleChange = (e) => {
    setDisable(false)
    if(e.target.name === 'title'){
      setNote({...note, title: e.target.value})
    }
    if(e.target.name === 'content'){
      setNote({...note, content: e.target.value})
    } 
  }

  const handleClick = (e) => {
    e.preventDefault();
    setNote({
      title: '',
      content: '',
  
    })
    setDisable(true)
    props.onAdd(note)
  }

  return (
 

   <div className="container my-3">

   <form className="card-center">
    <div className="col-12"><input className="form-control" name="title" placeholder="Title" onChange={handleChange}  value = {note.title} /><br></br>
    <textarea className="form-control" name="content" placeholder="Take a note..." onChange={handleChange} rows="3" value = {note.content}/>
    </div><br></br>
    <button onClick={handleClick} className="btn btn-primary" disabled={disable}>Add Note</button>
  </form>

  </div>
  );
}
  
export default CreateArea;
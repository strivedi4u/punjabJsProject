import React from "react";
import '../styles.css'

function Note(props) {
  
  const handleDelete = () => {
    props.delete(props.id)
  }
  return (
    <><br></br>
    <div className="card text-center">
    <div className="card-header">
  {props.note}
   
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.content} </p>
    
      <button onClick={handleDelete} style={{backgroundColor:"tomato"}} className="btn btn-primary">Delete</button>
    </div>
    <div className="card-footer text-muted">
  Developed by Shashank
    </div>
  </div>
  </>
  );
}


export default Note;

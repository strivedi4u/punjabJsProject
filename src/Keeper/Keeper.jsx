import React, {useState} from 'react';
import Note from "./Note"
import CreateArea from "./CreateArea";
import Header from '../components/Header';
import Notes from './note.jpg';
const Keeper = (props) => {
    const [notes,setNotes] = useState([]);
let x=0;
    const getData = (note) => {
         x = 0;
        setNotes([...notes, note]);
    }

    const deleteNote = (index) => {
        setNotes(prev => {
        const newNotes = prev.filter((note,i)=> {
            if(i === index) return false;
            return true
        })
        return newNotes
        })
    }

    const allNotes = notes.map((note,index)=>{
        x = x +1;
        return <Note title={note.title} note={x} content={note.content} key={index} id={index} delete={deleteNote}/>
    })
        return (
            <div  style={{ backgroundImage: `url(${Notes})`, backgroundSize: 'cover', height:'750px',  margin:0, padding:0 }}>
            <Header title={"Keeper App"} />
         
                <CreateArea onAdd = {getData} />
                {allNotes}
            </div>
        );
};
export default Keeper;
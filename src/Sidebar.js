import React from 'react';

function Sidebar ({notes, onAddNote}){

    // const [notes, setNotes] = useState([]); 

    // const onAddNote = () => {

    //   const newNote = {
    //      id: uuid(),

    //      title: "Untitled",

    //      body: "",

    //      date: Date.now(),

    //    };
    //    setNotes([newNote, ...notes]);
    //  };
    // const handleButtonClick = () => {
    // props.onButtonClick('/edit');
    // }

    return (
        <>
            <div className="sidebar-header">
              <h1><b>Notes</b></h1>

              <button onClick={onAddNote}><b>+</b></button>
            </div>

            <div className="sidebar-content">
              {notes.map((note) => (
              <div className="sidebar-note">

                <div className="sidebar-note-title">
                  <strong>TITLE</strong>
                </div>

                <p>Note Preview</p>

                <small className="sidebar-note-date">Last modified [date]</small>
              </div>
              ))}
            </div>
            {/* ,  {notes, onAddNote} */}
        </>
    )
}

export default Sidebar;
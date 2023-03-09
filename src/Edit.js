import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Edit() {
    const [value, setValue] = useState('');
  
    return (
        <>
        <div id="edit-header">
          <input className='edit-title' type="text" placeholder="Untitled" autoFocus />
          <input type="datetime-local" className />
          <button>Save</button>
          <button>Delete</button>
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Your note here"/>
        </>
    )
  }

export default Edit;
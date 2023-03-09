import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Sidebar from './Sidebar';

function Layout() {

    ///
    const navigate = useNavigate();

    const handleButtonClick = (component) => {
      navigate(component);
    }
    ///

    const hideSidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.main');
      sidebar.classList.toggle('hidden');
      content.classList.toggle('new-main');
    }

    ///
    const [notes, setNotes] = useState([]);

    const onAddNote = () => {
      const newNote = {
        id: uuid(),
        title: "Untitled",
        body: "",
        date: Date.now(),
      };
      setNotes([newNote, ...notes]);
      handleButtonClick('/edit');
    };
     ///
  
    return (
      <>
        <div className="header">         
          <div className="menu">
            <button onClick={hideSidebar}>&#9776;</button>
          </div>
          
          <div className="center-header">
            <h1><b>Lotion</b></h1>
            <h5>Like Notion, but worse!</h5> 
          </div>
        </div>
      
        <div id="body">
          {/* Sidebar section */}
          <div className="sidebar"><Sidebar notes={notes} onAddNote={onAddNote}/></div>
          
          {/* Content section */}
          <div id="content" className="main">
          
          {/* child components get injected here and replace <Outlet /> */}
          <Outlet />
          </div>
        </div>
      </>
      //  notes={notes} onAddNote={onAddNote}
      // onButtonClick={handleButtonClick} 
    )
  }

export default Layout;
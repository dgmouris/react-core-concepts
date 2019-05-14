import React from 'react';

function Student (props){
   return(
    <aside className="student">

    <div className="avatar">
        <img src="img/a02.png" alt="this is the templete"/>
    </div>

    <div className="bio">
    <header className="student-name">
        <h3>Mary Mac Dougall</h3>
    </header>
    
        <h4>Bio</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut, inventore est totam esse enim, officiis</p>
        <footer >
        <ul className="tag-cloud">
            <li>tag cloud </li>
            <li>tag cloud </li>
            <li>tag cloud </li>
            <li>tag cloud </li>
        </ul>
    </footer>
        </div>
   
</aside>
   )
}
function StudentList (props) {
    
  return (
      <Student/>
  )

 
}

export default  StudentList;
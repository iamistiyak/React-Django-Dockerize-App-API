import React from 'react'



export default function list(props) {
  
 const arr = props.info
 const deleteInfoFunction = props.sendData
 const bg = props.upcoming
//  if (!arr) return;

 const bgColor = bg ? { backgroundColor : "#ffe66d"} : {};
  return (
    <ul>
     {
         arr.map( (person, index) => {
                   
            return (
                <li key={index}>
                    <div className="flex" style={bgColor}>
                        <img src={person.image} alt="Image not found"/>
                        <div className="title">
                            <h3 className='name'>{person.name}</h3>
                            <h5 className="birth">Birthday : {<h6 className="birth">{person.date}</h6>}</h5>
                            <h5 className="age">{Old(person.date)} Year old</h5>
                        </div>
                        <button className='btn btn-danger delete-btn' onClick={()=>deleteInfoFunction(person.id)}>Delete</button>
                    </div>
                </li>
            )
        })
     }
   </ul>
  );
}
function Old(personAge){
    var today = new Date();
    var birthDate = new Date(personAge);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}



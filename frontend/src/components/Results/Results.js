import React from "react";
const Results = props =>(
            <ul>
            {props.data.length <= 0
              ? "NO DB ENTRIES YET"
              : props.data.map(dat => (
                  <li style={{ padding: "10px" }} key={dat.id}>
                    <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                    <span style={{ color: "gray" }}> fname: </span>
                    {dat.fname}
                    <span style={{ color: "gray" }}> lname: </span>
                    {dat.lname}
                    <span style={{ color: "gray" }}> email: </span>
                    {dat.email}
                    <span style={{ color: "gray" }}> Password: </span>
                    {dat.password}
             </li>
                ))}
           </ul>
          
   )
  
export default Results;
 
import  React  from "react";
// import axios from "axios";
    
   const SearchResult = props => (
          
           <ul>
            { props.animal.length <= 0 
              ? "NO DB ENTRIES YET"
              : props.animal.map(dat => (
                  <li style={{ padding: "10px" }} key={dat.id}>
                    <span style={{ color: "gray" }}> animal type: </span> {dat.animaltype} <br />
                    <span style={{ color: "gray" }}> name: </span>
                    {dat.name}
                    <span style={{ color: "gray" }}> weight: </span>
                    {dat.weight}
                    <span style={{ color: "gray" }}> age: </span>
                    {dat.age}
                    <span style={{ color: "gray" }}> sex: </span>
                    {dat.sex}
                  </li>
                ))}
           </ul>
           
        
   )


export default SearchResult;
 
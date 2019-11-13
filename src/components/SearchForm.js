import React, { useState } from "react";

export default function SearchForm(props) {


   const [searchText, setSearchText] = useState("");

   const handleChange = e => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };


  return (
    <section className="search-form">
     
     <form>
        <input className='input'
          type='text'
          placeholder="Search Character Name"
          name="name"
          onChange={handleChange}
          value={props.searchResult}
          
        />
        <button type="submit">Search</button>


        <ul>{props.searchResult.map(item => (
          <li>{item}</li>
        ))}</ul>
        
      </form>

    </section>
  );
}
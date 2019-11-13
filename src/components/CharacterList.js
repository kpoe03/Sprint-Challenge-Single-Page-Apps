import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect


  const [characters, setCharacters] = useState([]);

  const [searchResult, setSearchResult] = useState("");



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

Axios
.get('https://rickandmortyapi.com/api/character/')
.then(response => {
   const res = response.data.results.filter(char =>
       char.name.toLowerCase().includes(searchResult.toLowerCase())
    );
    
  console.log(response.data.results)
    // setCharacters(response.data.results);
    setCharacters(res);
// .catch(error => {
//   console.error(error);

  });
}, [searchResult]);

const handleChange = e => {
  console.log(e.target.value);
  setSearchResult(e.target.value);
};


  return (
    <section className="character-list grid-view ">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}

      {/* <SearchForm searchResult2={searchResult}/> */}


      
     <form className="search-form">
        <input className='input'
          type='text'
          placeholder="Search Character Name"
          name="name"
          onChange={handleChange}
          value={searchResult}
        />
        {/* <button type="submit">Search</button> */}
        
      </form>
     

      {characters.map(character => {

        return(

          <Link to={`/components/${character.id}`}>
            <CharacterCard key={character.id} char={character} />
            </Link>
         

        )

      })}

    </section>
  );
}
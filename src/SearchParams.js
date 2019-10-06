import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet"; //CHANGE TO ARRAY
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  //   const [animal, setAnimal] = useState("dog");
  //   const [breed, setBreed] = useState();
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    pet.breeds("dog").then(console.log, console.error);
  });

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        {/* 
        THESE TWO DROPDOWNS DO THE SAME AS WHAT'S COMMENTED OUT BELOW 
        */}
        <AnimalDropdown />
        <BreedDropdown />
        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)} //eslint required onBlur for accessibility reasons
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0} //Disable breeds if breed list is length zero
          >
            <option>All</option>
            {breeds.map(breedString => (
              <option value={breedString} key={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label> */}
      </form>
    </div>
  );
};

export default SearchParams;

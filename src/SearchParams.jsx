import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Result from "./Result";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const petInfo = await res.json();
    console.log("pets", pets);
    console.log("petInfo: ", petInfo);
    console.log("petInfo.pets: ", petInfo.pets);
    setPets(petInfo.pets);
  };

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="aninal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />{" "}
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}{" "}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />{" "}
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}{" "}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result petsInfo={pets}/>
    </div>
  );
};

export default SearchParams;

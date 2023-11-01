import Pet from "./Pet";

import React from 'react'

const Result = ({petsInfo}) => {
    return(
        <div className="search">
            {
                !petsInfo.length ? (
                    <h1>No pets Found</h1>
                ) : (
                    petsInfo.map((pet) => {
                        return (
                            <Pet
                                animal={pet.animal}
                                key={pet.id}
                                name={pet.name}
                                breed={pet.breed}
                                images={pet.images}
                                location={`${pet.city}, ${pet.state}`}
                                id={pet.id}
                            />
                        );
                    })
                )
            }
        </div>
    );
};

export default Result;

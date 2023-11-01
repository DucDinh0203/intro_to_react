const Pet = (props) => {
    const {name, animal, breed, images, location, id} = props; // assign all the properties into "props"

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    
    if (images.length) {
        hero = images[0];
    }

    return (
        <a href = {`/details/${id}`} className="pet">
            <div className="image-container">
                <img src ={hero} alt={name}/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2><i>{animal}</i></h2>
                <h2>{`${breed} - ${location}`}</h2>
            </div>
        </a>
    );
};


export default Pet;

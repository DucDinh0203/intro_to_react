import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  }; // active state of photo in the set of photos, for example 5 photos, the photos with id 0 will be active

  static defaultProps = {
    images: ["http;//pets-images.dev-apis.com/pets/none.jpg"],
  };

  // handleIndexClick() {
  //   console.log(this);
  //   // console will return "undefined"
  // }

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;

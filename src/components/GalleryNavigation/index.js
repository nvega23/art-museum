import harvardArt from "../../data/harvardArt"
import { NavLink } from "react-router-dom";

const GalleryNavigation = ({galleries})=> {
    console.log(galleries)
    return (
    <nav>
      <h1>Galleries</h1>
        <NavLink to = " /">
            Home
        </NavLink>
        { galleries.map(gallery => {

        <NavLink to = "/galleries/{gallery.id}">
          {gallery}
        </NavLink>
    })}
    </nav>


export default GalleryNavigation;
//props.galleries

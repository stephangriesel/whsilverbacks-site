import { Fade } from "react-awesome-reveal";
import { FaHome } from 'react-icons/fa';

const NavLinks = (props) => {
  return (

    <ul>
      <Fade delay={50}>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/"><FaHome className="homeIcon" /></a>
        </li>
      </Fade>
      <Fade delay={70}>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="/about">ABOUT</a>
        </li>
      </Fade>
      <Fade delay={110}>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="/eventconstruction">EVENT CONSTRUCTION</a>
        </li>
      </Fade>
      <Fade delay={140}>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="/stretchtents">STRETCH TENTS</a>
        </li>
      </Fade>
      <Fade delay={170}>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="/temporarystructures">TEMPORARY STRUCTURES</a>
        </li>
      </Fade>
      <Fade delay={200}>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a href="/contact">CONTACT</a>
        </li>
      </Fade>
    </ul>
  );
}

export default NavLinks;
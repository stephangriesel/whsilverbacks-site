const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/">HOME</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/about">ABOUT</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/eventconstruction">EVENT CONSTRUCTION</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/stretchtents">STRETCH TENTS</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/temporarystructures">TEMPORARY STRUCTURES</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  );
}

export default NavLinks;
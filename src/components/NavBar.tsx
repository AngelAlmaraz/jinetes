import { HStack, Image, Box } from "@chakra-ui/react";
import logoDark from "../assets/white.webp";
import logoLight from "../assets/black.webp";
import userDark from "../assets/userDark.webp";
import userLight from "../assets/userLight.webp";
import kartLight from "../assets/carritoLight.webp";
import kartDark from "../assets/carritoDark.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import SearchInput from "./SearchInput";
import {Link, useNavigate} from "react-router-dom";
import {getUser, resetUserSession} from "../services/auth";

const NavBar = () => {
  const [themeDark, setThemeDark] = useState(true);
  const [logInDiv, setLogInDiv] = useState(false);
  const [logoutDiv, setLogoutDiv] = useState(false);
  const user = getUser();
  const username = user !== undefined && user ? user.username:'';

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const handleUserClick = () => {
    const user = getUser();
    if (user) {
      setLogoutDiv(!logoutDiv);
    }
    else {
      setLogInDiv(!logInDiv);
    }
  }
  const logoutHandler = () => {
    setLogoutDiv(!logoutDiv);
    resetUserSession();
  }
  return (
    <>
      <HStack padding="10px">
        <Link to={"/"}>
          <Image
            src={themeDark === true ? logoDark : logoLight}
            boxSize="60px"
          ></Image>
        </Link>
        <SearchInput />
        {getUser() && <Image
            src={themeDark === true ? kartDark : kartLight}
            boxSize="60px"
        ></Image>}
          <Image
              src={themeDark === true ? userDark : userLight}
              boxSize="50px"
              onClick={handleUserClick}
          ></Image>
        <ColorModeSwitch onToggleSwitch={toggleTheme} />
      </HStack>
      {logInDiv && (
          <Box bg="gray.200" w="40" h="20" ml="87%" textAlign="center">
            <Link to={'/signin'}>
              <button style={{background:"#0C1326", padding:"5px",marginTop:"10%", width:"60%",height:"50%"}} onClick={handleUserClick}>Sign In</button>
            </Link>
          </Box>
      )}
      {logoutDiv && (
          <Box bg="gray.200" w="40" h="20" ml="87%" textAlign="center">
            <Link to={'/'}>
              <button style={{background:"#0C1326", padding:"5px",marginTop:"10%", width:"60%",height:"50%"}} onClick={logoutHandler}>Sign Out</button>
              <p style={{color:"black", padding:"2px"}}>Signed in as: {username}</p>
            </Link>
          </Box>
      )}
    </>
  );
};

export default NavBar;

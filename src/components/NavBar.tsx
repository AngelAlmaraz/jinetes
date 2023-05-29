import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logoLight from "../assets/black.webp";
import logoDark from "../assets/white.webp";
import { getUser, resetUserSession } from "../services/auth";
import useBookQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const [themeDark, setThemeDark] = useState(true);
  const [logInDiv, setLogInDiv] = useState(false);
  const [logoutDiv, setLogoutDiv] = useState(false);
  const user = getUser();
  const username = user !== undefined && user ? user.username : "";
  const navigate = useNavigate();
  const setSelectedGenre = useBookQueryStore((s) => s.setGenre);
  const setSearchText = useBookQueryStore((s) => s.setSearchText);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const handleUserClick = () => {
    const user = getUser();
    if (user) {
      setLogoutDiv(!logoutDiv);
    } else {
      setLogInDiv(!logInDiv);
    }
  };
  const logoutHandler = () => {
    setLogoutDiv(!logoutDiv);
    resetUserSession();
  };
  const kartHandler = () => {
    if (user) {
      console.log("/kart");
    } else {
      navigate("/signin");
    }
  };
  return (
    <>
      <HStack padding="10px">
        <Link to="/">
          <Image
            src={themeDark === true ? logoDark : logoLight}
            boxSize="60px"
            objectFit="cover"
            onClick={() => {
              setSelectedGenre(null);
              setSearchText("");
            }}
          ></Image>
        </Link>
        <SearchInput />
        {user && (
          <Button variant="link">
            <BsCartFill size={35} onClick={kartHandler} />
          </Button>
        )}

        <Button variant="link">
          <FaUserAlt size={30} onClick={handleUserClick} />
        </Button>

        <ColorModeSwitch onToggleSwitch={toggleTheme} />
      </HStack>
      {logInDiv && (
        <Box bg="gray.200" w="40" h="20" ml="85%" textAlign="center">
          <Link to={"/signin"}>
            <button
              style={{
                background: "#0C1326",
                padding: "5px",
                marginTop: "5%",
                width: "70%",
                height: "50%",
              }}
              onClick={handleUserClick}
            >
              Sign In
            </button>
          </Link>
        </Box>
      )}
      {logoutDiv && (
        <Box bg="gray.200" w="200px" h="120px" ml="85%" textAlign="center">
          <Link to={"/"}>
            <button
              style={{
                background: "#0C1326",
                padding: "5px",
                marginTop: "5%",
                width: "70%",
                height: "50%",
              }}
              onClick={logoutHandler}
            >
              Sign Out
            </button>
            <p style={{ color: "black", padding: "2px" }}>
              Signed in as: {username}
            </p>
          </Link>
        </Box>
      )}
    </>
  );
};

export default NavBar;

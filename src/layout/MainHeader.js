import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRef } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


function MainHeader() {
  
  const refSearch = useRef(null);
  console.log(refSearch);
  const auth = useAuth();
  console.log(auth);

  let navigative = useNavigate();

  const hanldeSearch = async() => {
   
    if (refSearch.current.value) {
      await navigative(`/?search=${refSearch.current.value?.trim()}`)
    } else {
      navigative("/");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#757575", color: "white" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Job Routing
            </Typography>
            
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                type="text"
                inputRef={refSearch}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />

            </Search>

            <button onClick={hanldeSearch}>Search</button>

            <Box flexGrow={1}></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              {auth.user ? (
                <Button onClick={() => auth.Logout()} color="inherit">
                  {" "}
                  <LogoutIcon />
                  Logout
                </Button>
              ) : (
                <Button color="inherit" onClick={() => navigative("/login")}>
                  {" "}
                  <LoginIcon />
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const Navbar = () => {

    const StyledToobar = styled(Toolbar)(()=>({
       display: "flex",
       justifyContent: "space-evenly"
    }))

    return (
      <>
     
       <AppBar position="absolute">
       <StyledToobar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Project</MenuItem>
        </StyledToobar>
       </AppBar>
       
      </>
    )
  }
  
  export default Navbar
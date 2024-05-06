import React from "react";
import { Box, Divider, useMediaQuery } from "@mui/material";
import LogoIcon from "../Logo/LogoIcon";
import Logo from "../Logo/Logo";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
export default function LeftNavBar() {

  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box sx={{display:"flex", alignItems:"center"}}>
      <LogoIcon/>
      <Logo />
        <Divider variant="fullWidth" orientation="vertical" flexItem />
        
      {matchesMd && (
      
      <>
        <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px", backgrounndColor:"red"}}
          to={ROUTES.CARDS} 
          label={"Cards"}/>
          <Divider variant="fullWidth" orientation="vertical" flexItem/>
        
        <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px"}}
          to={ROUTES.ABOUT} 
          label={"About"}/>
          <Divider variant="fullWidth" orientation="vertical" flexItem/>
        
        <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px"}}
          to={ROUTES.SANDBOX} 
          label={"Sandbox"}/>
          <Divider variant="fullWidth" orientation="vertical" flexItem/>
        
          <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px"}}
          to={ROUTES.SIGNUP} 
          label={"Signup Page"}/>
          <Divider variant="fullWidth" orientation="vertical" flexItem/>
        
          <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px"}}
          to={ROUTES.LOGIN} 
          label={"Login Page"}/>
          <Divider variant="fullWidth" orientation="vertical" flexItem/>
      </>)}
      
    </Box>
  );
}

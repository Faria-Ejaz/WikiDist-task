import React from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/system";
import { Box, Link, Button } from "@mui/material";
// Assets
import logo from "../assets/svg/logo.svg";

function Nav() {
  return (
    <StyledNavBox component="nav" sx={{ py: 3 }}>
      <Container>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          flexWrap="wrap"
        >
          <StyledLink href="/">
            <img src={logo} alt="Passfort logo" />
          </StyledLink>
          <Box display="flex" justifyContent="space-between">
            <StyledButton>Book a Demo</StyledButton>
          </Box>
        </Box>
      </Container>
    </StyledNavBox>
  );
}

export default Nav;

const StyledLink = styled(Link)({
  width: "220px",
  height: "24px",
});

const StyledButton = styled(Button)({
  marginTop: "0px",
  marginLeft: "20px",
  padding: "10px 20px",
  borderStyle: "none",
  borderWidth: "3px",
  borderColor: "#09bc06",
  borderRadius: "10px",
  backgroundColor: "#09bc06",
  fontFamily: "Montserrat, sans-serif",
  color: "#fff",
  fontSize: "16px",
  lineHeight: "23px",
  fontWeight: 600,
  textDecoration: "none",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#00303e",
  },
});

const StyledNavBox = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 9999,
  display: "block",
  overflow: "visible",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "16px 0px",
});

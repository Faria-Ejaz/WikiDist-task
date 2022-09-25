import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
// Components
import Nav from "../components/Nav";
// Context
import { DocumentContext } from "../context/DocumentContext";

function RevisionPage() {
  const { revision, addRevision } = useContext(DocumentContext);

  let location = useLocation();

  const getSelectedRevision = () => {
    fetch(`http://127.0.0.1:5003${location.pathname}`)
      .then((res) => res.json())
      .then(
        (result) => {
          addRevision(result);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    getSelectedRevision();
  }, []);

  return (
    <>
      <Nav />
      <Wrap>
        <Typography variant="h3" color="text.secondary">
          {revision.title}
        </Typography>
        <Typography gutterBottom variant="p" component={"div"}>
          {revision.data}
        </Typography>
      </Wrap>
    </>
  );
}

export default RevisionPage;

const Wrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "25px",

  "& > div": {
    margin: "20px auto 0px",
    fontFamily: "Montserrat, sans-serif",
    color: "#555",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: 400,
  },

  "& > h3": {
    fontFamily: "Hurmegeometricsans1, sans-serif",
    color: "#00303e",
    fontSize: "40px",
    lineHeight: "30px",
    fontWeight: 700,
  },
});

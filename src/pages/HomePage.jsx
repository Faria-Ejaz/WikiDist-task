import React, { useEffect, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
// Components
import DocumentForm from "../components/DocumentForm";
import DocumentList from "../components/DocumentList";
import Nav from "../components/Nav";
// Context
import { DocumentContext } from "../context/DocumentContext";

function HomePage() {
  const { document, addDocument } = useContext(DocumentContext);

  const getAllDocuments = () => {
    fetch("http://127.0.0.1:5003/pages")
      .then((res) => res.json())
      .then(
        (result) => {
          addDocument(result.titles);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    getAllDocuments();
  }, []);

  return (
    <>
      <Nav />
      <Wrap>
        <Typography variant="h3" color="text.secondary">
          Welcome to Wikipedia
        </Typography>
        <Typography gutterBottom variant="p" component={"div"}>
          the free encyclopedia that anyone can edit.
        </Typography>
      </Wrap>
      <DocumentBox>
        <DocumentList documents={document} docTitle={"Documents"} />
        <DocumentForm docTitle={"Document"} revisionTitle={document.title} />
      </DocumentBox>
    </>
  );
}

export default HomePage;

const DocumentBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
});

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

import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
// Components
import Nav from "../components/Nav";
import DocumentForm from "../components/DocumentForm";
import DocumentList from "../components/DocumentList";
// Context
import { DocumentContext } from "../context/DocumentContext";

function DocumentPage() {
  const { revision, addRevision, revisionTimeStamp, addRevisionTimeStamp } =
    useContext(DocumentContext);

  let location = useLocation();

  const getAllRevisions = () => {
    fetch(`http://127.0.0.1:5003${location.pathname}`)
      .then((res) => res.json())
      .then(
        (result) => {
          addRevisionTimeStamp(result.revisions);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const getLatestRevision = () => {
    fetch(`http://127.0.0.1:5003${location.pathname}/latest`)
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
    getLatestRevision();
    getAllRevisions();
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
      <DocumentBox>
        <DocumentList
          documents={revisionTimeStamp}
          docTitle={"Revisions"}
          revisionTitle={revision.title}
        />
        <DocumentForm docTitle={"Revision"} />
      </DocumentBox>
    </>
  );
}

export default DocumentPage;

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

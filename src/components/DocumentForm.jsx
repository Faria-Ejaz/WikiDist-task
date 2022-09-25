import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  styled,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
//Context
import { DocumentContext } from "../context/DocumentContext";

function DocumentForm({ docTitle }) {
  const params = useParams();
  let history = useHistory();

  const { revision, addRevision } = useContext(DocumentContext);

  const [documentTitle, setDocumentTitle] = useState(params.document || "");
  const [documentBody, setDocumentBody] = useState("");

  const publishDoc = () => {
    if (revision) {
      fetch(`http://127.0.0.1:5003/page/${revision.title}`, {
        method: "POST",
        body: JSON.stringify({
          page: `${documentBody}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        addRevision({ title: documentTitle, data: documentBody });
        setDocumentBody("");
        docTitle === 'Document' &&  history.push(`/page/${documentTitle}`);
      }).catch((err)=>{
        console.error(err);
      })
    }
  };

  return (
    <FormBox>
      <Typography>Add New {docTitle}</Typography>
      <TextField
        helperText=" "
        id="input"
        placeholder="Enter Title"
        type="text"
        maxLength={50}
        value={revision.title}
        onChange={(event) => setDocumentTitle(event.target.value)}
      />
      <TextareaAutosize
        minRows={3}
        id="textarea"
        placeholder="Enter Description"
        value={documentBody}
        onChange={(event) => setDocumentBody(event.target.value)}
      />
      <Button onClick={() => publishDoc()}>Submit</Button>
    </FormBox>
  );
}

export default DocumentForm;

const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "25px",
  backgroundColor: "#00303E",
  padding: "30px 15px",
  minWidth: "540px",
  borderRadius: "10px",

  "& .MuiInputBase-root": {
    border: "solid 1px #000",
    backgroundColor: "#eceff1",
    width: "100%",
    fontFamily: "Hurme Geometric Sans 3, sans-serif",
    fontWeight: 600,
    color: "#00303E",
    borderRadius: "5px",
    fontSize: "16px",
    display: "block",
    boxSizing: "border-box",
    boxShadow: "inset -4px -4px 10px 0 #fff, inset 4px 4px 10px 0 #cfd8dc",
  },

  "& > textarea": {
    minHeight: "100px",
    border: "solid 1px #000",
    backgroundColor: "#eceff1",
    width: "100%",
    fontFamily: "Hurme Geometric Sans 3, sans-serif",
    fontWeight: 600,
    color: "#00303E",
    borderRadius: "5px",
    fontSize: "16px",
    display: "block",
    boxSizing: "border-box",
    boxShadow: "inset -4px -4px 10px 0 #fff, inset 4px 4px 10px 0 #cfd8dc",
  },

  "& > p": {
    marginTop: 0,
    marginBottom: "30px",
    textAlign: "left",
    color: "#78909c",
    paddingLeft: "10px",
  },

  "& > .MuiButtonBase-root": {
    padding: "15px 30px",
    borderColor: "#09BC06",
    borderRadius: "4px",
    fontFamily: "'Hurme Geometric Sans 3', sans-serif",
    fontSize: "17px",
    backgroundColor: "#09BC06",
    color: "#fff",
    borderStyle: "solid",
    borderWidth: "2px",
    maxWidth: "100px",
    maxHeight: "55px",
    textTransform: "capitalize",
    margin: "20px 0",
  },
});

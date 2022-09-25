import {
  Box,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";

function DocumentList({ documents, docTitle, revisionTitle }) {
  return (
    <ContentBox sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>{docTitle}</Typography>
      <List>
        {documents?.map((document, index) => {
          return (
            <ListItem disablePadding>
              <ListItemButton component="a" href={docTitle !== "Revisions"?`/page/${document}`:`/page/${revisionTitle}/${document}` } key={index}>
                <ListItemText primary={docTitle === 'Revisions' ?new Date(document * 1000).toLocaleString(): document} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </ContentBox>
  );
}

export default DocumentList;

const ContentBox = styled(Box)({
  display: "flex",
  padding: "6px 8px",
  minWidth: "540px",
  marginTop: "25px",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0 20px 50px 0 hsl(0deg 0% 47% / 10%)",

  "& > .MuiTypography-root": {
    marginBottom: "15px",
    fontFamily: "Hurmegeometricsans1, sans-serif",
    color: "#00303e",
    fontSize: "30px",
    lineHeight: "45px",
    fontWeight: 700,
  },

  "& > .MuiListItem-root": {
    paddingTop: "15px",
    paddingBottom: "35px",
    fontFamily: "Montserrat, sans-serif",
    color: "#555",
    fontSize: "12px",
    lineHeight: "26px",
    fontWeight: 400,
  },
});

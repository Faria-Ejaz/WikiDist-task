import HomePage from "./pages/HomePage";
import DocumentPage from "./pages/DocumentPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import RevisionPage from "./pages/RevisionPage";
// Context
import DocumentContextProvider from "./context/DocumentContext";

function App() {
  return (
    <DocumentContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route
            exact
            path="/page/:document"
            component={withRouter(DocumentPage)}
          />
          <Route
            path="/page/:document/:revisions"
            component={withRouter(RevisionPage)}
          />
        </Switch>
      </Router>
    </DocumentContextProvider>
  );
}

export default App;

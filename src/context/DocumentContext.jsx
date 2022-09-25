import { useState, createContext } from "react";

const contextDefaultValues = {
  document: [],
  addDocument: () => [],
  revision: {},
  addRevision: () => {},
  revisionTimeStamp: [],
  addRevisionTimeStamp: () => [],
};

export const DocumentContext = createContext(contextDefaultValues);

const DocumentContextProvider = ({ children }) => {
  const [document, setDocument] = useState(contextDefaultValues.document);
  const [revision, setRevision] = useState(contextDefaultValues.revision);
  const [revisionTimeStamp, setRevisionTimeStamp] = useState(
    contextDefaultValues.revisionTimeStamp
  );

  const addDocument = (newDocument) => setDocument(() => [...newDocument]);

  const addRevision = (newRevision) => {
    setRevision(() => newRevision);
  };

  const addRevisionTimeStamp = (newTimeStamp) => {
    setRevisionTimeStamp(() => [...newTimeStamp]);
  };

  return (
    <DocumentContext.Provider
      value={{
        document,
        addDocument,
        revision,
        addRevision,
        revisionTimeStamp,
        addRevisionTimeStamp,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextProvider;

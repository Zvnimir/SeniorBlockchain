import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Typography, Button } from '@mui/material'


export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}/>
      </Document>
      <div>
        <Typography variant="body1" component="div">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </Typography>
        <Button 
          disabled={pageNumber <= 1} 
          size="small" 
          variant="contained"
          onClick={() => {
            previousPage()
          }}>
            Previous
        </Button>
        <Button 
          type="button"
          disabled={pageNumber >= numPages}
          size="small"
          variant="contained"
          onClick={() => {
            nextPage()
          }}>
            Next
        </Button>
      </div>
    </>
  );
}

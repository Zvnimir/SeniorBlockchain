import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Typography, Button } from '@mui/material'
import { Box } from "@mui/system";


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
    <Box>
      <Box sx={{height: 655}}>
        <Document 
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          renderMode={'svg'}
          >
            <Page pageNumber={pageNumber} />
        </Document>
      </Box>
      
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="body1" component="div" sx={{mt: 2, mb: 1.3}}>
          {pageNumber || (numPages ? 1 : "--")} / {numPages || "--"}
        </Typography>
        <Box>
          <Button 
            sx={{mr:.7}}
            disabled={pageNumber <= 1} 
            size="small" 
            variant="contained"
            onClick={() => {
              previousPage()
            }}>
              &lt;
          </Button>
          <Button 
            sx={{ml:.7}}
            type="button"
            disabled={pageNumber >= numPages}
            size="small"
            variant="contained"
            onClick={() => {
              nextPage()
            }}>
              &gt;
          </Button>
        </Box>
        
      </Box>
    </Box>
  );
}

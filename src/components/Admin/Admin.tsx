import { Card, CardContent, Container, TableCell, TableRow } from "@mui/material";

import React from "react";

function Admin(){
  
      return (
        
        <div className="App">
          
                      <Card>
                          <CardContent>
                          <div className="header">Users waiting for verification</div>
                            <Container>
                                <TableRow>
                                    <TableCell>
                                    <p className="">User name... </p>
                                    </TableCell>
                                    <TableCell>
                                    <button type="button" className="btn">Approve</button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                    <p className="header">User name... </p>
                                    </TableCell>
                                    <TableCell>
                                    <button type="button" className="btn">Approve</button>
                                    </TableCell>
                                </TableRow>

                            </Container>
                            </CardContent>
                </Card>
        </div>

      );
    
  }
  
export default Admin;


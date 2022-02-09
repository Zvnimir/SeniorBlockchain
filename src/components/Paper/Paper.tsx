import { Typography } from '@mui/material'
import React from 'react'
import { User } from '../../model/User'
import { Paper } from '../../model/Paper'
 
type PaperProps = {
    paper: Paper
}

function Papersy({paper}: PaperProps) {
    return (
        <div className="centered">
            <Typography variant="h3" component="div">
                { paper.title }
            </Typography>
            <Typography variant="body1" component="div">
                { paper.domain }
            </Typography>
            <Typography variant="body1" component="div">
                { paper.description }
            </Typography>
            <Typography variant="body1" component="div">
                { paper.uploader.username }
            </Typography>
        </div>
            
        
    )
}

export default Papersy
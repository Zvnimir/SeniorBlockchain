import * as React from "react";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Typography, Container, Box, Link } from "@mui/material";


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import loginImage from "../../undraw_login_re_4vu2.svg"
import metamaskMainImage from "../../metamask_main.jpeg"
import metamaskInstallImage from "../../metamask_install.jpeg"
import metamaskAddImage from "../../metamask_add.jpeg"
import metamaskConfirmAddImage from "../../metamask_confirm.jpeg"
import metamaskStartImage from "../../metamask_start.jpeg"
import metamaskChoiceImage from "../../metamask_choice.jpeg"

function Guide() {

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));

    const content = (
        <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
        </div>
    );

    const contentStepOne = (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                Download
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                Fisrtly, you need to download metamask <i><Link href="https://metamask.io/">here</Link></i>.
            </Typography>
        </div>
    );

    const contentStepTwo = (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                Install
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                Then you need to install it by pressing the "Install MetaMask for Chrome" button.
            </Typography>
        </div>
    );

    const contentStepThree = (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                Add MetaMask to Chrome
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                Once installed, MetaMask must be added as a Chrome extension.
            </Typography>
        </div>
    );

    const contentStepFour = (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                Enable Chrome extension
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                And enabled.
            </Typography>
        </div>
    );

    const contentStepFive = (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                Get Started
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                After it has been enabled, you must start using it.
            </Typography>
        </div>
    );

    const contentStepSix = (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                New or Old user Choice
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                Lastly, import an existing, or create a new wallet.
            </Typography>
        </div>
    );

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, pt: 2, pb: 4 }} >

                <Typography variant="h4" gutterBottom component="div" align='center'>
                    Metamask Guide
                </Typography>
                <Typography variant="h5" gutterBottom component="div" align='center'>
                    Instructions for using Metamask
                </Typography>

                <Root>
                    <Divider>STEP 1</Divider>
                    {contentStepOne}
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 470,
                            width: 850,
                            maxHeight: { xs: 550, md: 470 },
                            maxWidth: { xs: 750, md: 850 },
                        }}
                        src={metamaskMainImage}
                    />

                    <Divider>STEP 2</Divider>
                    {contentStepTwo}
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 470,
                            width: 850,
                            maxHeight: { xs: 550, md: 470 },
                            maxWidth: { xs: 750, md: 850 },
                        }}
                        src={metamaskInstallImage}
                    />

                    <Divider>STEP 3</Divider>
                    {contentStepThree}
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 470,
                            width: 850,
                            maxHeight: { xs: 550, md: 470 },
                            maxWidth: { xs: 750, md: 850 },
                        }}
                        src={metamaskAddImage}
                    />

                    <Divider>STEP 4</Divider>
                    {contentStepFour}
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 470,
                            width: 850,
                            maxHeight: { xs: 550, md: 470 },
                            maxWidth: { xs: 750, md: 850 },
                        }}
                        src={metamaskConfirmAddImage}
                    />

                    <Divider>STEP 5</Divider>
                    {contentStepFive}
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 470,
                            width: 850,
                            maxHeight: { xs: 550, md: 470 },
                            maxWidth: { xs: 750, md: 850 },
                        }}
                        src={metamaskStartImage}
                    />

                    <Divider>STEP 6</Divider>
                    {contentStepSix}
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 470,
                            width: 850,
                            maxHeight: { xs: 550, md: 470 },
                            maxWidth: { xs: 750, md: 850 },
                        }}
                        src={metamaskChoiceImage}
                    />

                </Root>

                {/* <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                General settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                You are currently not an owner
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Advanced settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Filtering has been entirely disabled for whole web server
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div> */}
            </Container>

        </>
    )
}
export default Guide


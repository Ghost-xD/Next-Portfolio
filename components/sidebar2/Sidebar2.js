"use client"

import FileTree from "../common/FileTree";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Height } from "@mui/icons-material";

export default function Sidebar2() {

  const router = useRouter();
  
  const treeData = [
    {
      name: "home",
      children: [
        {
          name: "components",
          children: [
            { name: "aboutme.js" },
            { name: "projects.js" },
            { name: "github.js" },
          ],
        },
      ],
    },
    {
      name: "skills_package.json",
    },
    {
      name: "README_RESUME.md",
    },
  ];

  const customRoutes = {
    "aboutme.js": "/about",
    "projects.js": "/projects",
    "github.js": "/github",
    "skills_package.json": "/skills",
    "README_RESUME.md": "/resume",
  };

  const handleClick = (nodeName) => {
    const customRoute = customRoutes[nodeName];
    if (customRoute) {
      router.push(customRoute);
    } else {
      console.error(`No route defined for ${nodeName}`);
    }
  };
  
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderBottom: `1px solid #444`,
    '&:not(:last-child)': {
      borderBottom: `1px solid #444`,
    },
    '&::before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.5rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: 'rotate(90deg)',
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#000',
    }),
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #000',
  }));

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <aside className="sidebar2">
      <div className="sidebar2-title">Explorer</div>
      <div className="referencer">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: 'black', color: 'white', height:'75vh' }}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" 
          expandIcon={<ExpandMoreIcon sx={{ color: 'white',transform: expanded === 'panel1' ? 'rotate(270deg)' : 'rotate(270deg)',
          transition: 'transform 0.3s', fontSize:'small'}} />}>
            <Typography sx={{ fontSize:'small'}}>PORTFOLIO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="sidebar2-data">
              <FileTree data={treeData} customRoutes={customRoutes} onClick={handleClick}/>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: 'black', color: 'white' }}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon sx={{ color: 'white',transform: expanded === 'panel1' ? 'rotate(270deg)' : 'rotate(270deg)',
          transition: 'transform 0.3s', fontSize:'small'}} />}>
            <Typography sx={{ fontSize:'small'}}>DOCKER CONTAINERS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: 'black', color: 'white' }}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon sx={{ color: 'white',transform: expanded === 'panel1' ? 'rotate(270deg)' : 'rotate(270deg)',
          transition: 'transform 0.3s', fontSize:'small'}} />}>
            <Typography sx={{ fontSize:'small'}}>DOCKER IMAGES</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      </div>
    </aside>
  );
}
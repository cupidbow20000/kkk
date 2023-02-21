import '../css/header.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(!anchorEl);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
        <div className="header">
          <a href="" style={{paddingLeft:"10%"}}>
            <img src="../paxos-logo.svg" title="paxos" alt="paxos" loading="lazy" />
          </a>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick}
         style={{marginLeft:"30%"}}
      >
        Products
      </Button>
            
              <Box sx={{ flexGrow: 1 }} id="basic-menu"
                display={anchorEl}
                onMouseOut={handleClose}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} key={0}>
                    <Item>1</Item>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={0}>
                    <Item>1</Item>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={0}>
                    <Item>1</Item>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={0}>
                    <Item>1</Item>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={0}>
                    <Item>1</Item>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={0}>
                    <Item>1</Item>
                  </Grid>
                </Grid>
              </Box>
        </div>
    );
}

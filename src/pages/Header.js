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

    const [anchorEl, setAnchorEl] = React.useState("none");
    const [anchorEl2, setAnchorEl2] = React.useState("none");
    const open = anchorEl, open2 = anchorEl2;
    const handleClick = (event) => {
      setAnchorEl("block");
      setAnchorEl2("none");
    };
    const handleClick2 = (event) => {
      setAnchorEl("none");
      setAnchorEl2("block");
    };
    const handleClose = () => {
      setAnchorEl("none");
    };
    const handleClose2 = () => {
      setAnchorEl2("none");
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
          <Button
            id="basic-button2"
            aria-controls={open2 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onMouseEnter={handleClick2}
            style={{marginLeft:"5%"}}
          >
            Company
          </Button>
          <Box sx={{ flexGrow: 1 }} id="basic-menu"
            open={open}
            display={anchorEl}
            onMouseLeave={handleClose}
            style={{marginLeft:"10%", marginRight:"10%",  padding:"10px", border:"ridge" }}
            >
            <Grid container spacing={{ xs: 5, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item><p className="myupper">CRYPTO FOR ENTERPRISE</p></Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item><p className="myupper">CRYPTO FOR INVESTORS</p></Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item><p className="myupper">SETTLEMENT FOR INSTITUTIONS</p></Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Crypto Brokerage<br/>Build your crypto solution</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>itBit<br/>Crypto exchange</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Securities<br/>Equities settlement for broker-dealers</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Stablecoin and Payments<br/>Blockchain-enabled money movement</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>BUSD<br/>Regulated digital dollar</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Commodities<br/>Precious metals settlement</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}></Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>USDP<br/>Regulated digital dollar</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}></Grid>
              <Grid item xs={4} sm={4} md={4} key={0}></Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>PAXG<br/>Tokenized gold</Item>
              </Grid>
            </Grid>
          </Box>
        
          <Box sx={{ flexGrow: 1 }} id="basic-menu"
            open={open2}
            display={anchorEl2}
            onMouseLeave={handleClose2}
            style={{ border:"ridge" }}
            >
            <Grid container spacing={{ xs: 5, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item><p className="myupper">CRYPTO FOR ENTERPRISE</p></Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item><p className="myupper">CRYPTO FOR INVESTORS</p></Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item><p className="myupper">SETTLEMENT FOR INSTITUTIONS</p></Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Crypto Brokerage<br/>Build your crypto solution</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>itBit<br/>Crypto exchange</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Securities<br/>Equities settlement for broker-dealers</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Stablecoin and Payments<br/>Blockchain-enabled money movement</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>BUSD<br/>Regulated digital dollar</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>Commodities<br/>Precious metals settlement</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}></Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>USDP<br/>Regulated digital dollar</Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} key={0}></Grid>
              <Grid item xs={4} sm={4} md={4} key={0}></Grid>
              <Grid item xs={4} sm={4} md={4} key={0}>
                <Item>PAXG<br/>Tokenized gold</Item>
              </Grid>
            </Grid>
          </Box>
        </div>
    );
}

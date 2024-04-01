import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Storage';
import ProductionIcon from '@mui/icons-material/ProductionQuantityLimits';
import PurchaseIcon from '@mui/icons-material/LocalMall';
import SalesIcon from '@mui/icons-material/MonetizationOn';
import ReportsIcon from '@mui/icons-material/Assessment';
import IntegrationsIcon from '@mui/icons-material/SettingsInputComponent';
import SettingsIcon from '@mui/icons-material/Settings';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <b><Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/registration">Registration</Button></b>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/dashboard">
            <InventoryIcon></InventoryIcon>
            <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem button component={Link} to="/production">
            <ProductionIcon></ProductionIcon>
            <ListItemText primary="Production" />
          </ListItem>
          <ListItem button component={Link} to="/purchase">
            <PurchaseIcon></PurchaseIcon>
            <ListItemText primary="Purchase" />
          </ListItem>
          <ListItem button component={Link} to="/sales">
            <SalesIcon></SalesIcon>
            <ListItemText primary="sales" />
          </ListItem>
          <ListItem button component={Link} to="/report">
            <ReportsIcon></ReportsIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button component={Link} to="/inte">
            <IntegrationsIcon></IntegrationsIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <SettingsIcon></SettingsIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Dashboard;


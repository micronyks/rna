import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useLocation, To } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Menu items with icons
  const menuItems = [
    { label: 'Profile', path: '/profile', icon: <PersonIcon /> },
    { label: 'Services', path: '/services', icon: <BuildIcon /> },
    { label: 'Location', path: '/location', icon: <LocationOnIcon /> },
  ];

  const handleMenuClick = (path: To) => {
    navigate(path);
    setSidebarOpen(false); // Close sidebar after navigating
  };

  return (
    <AppBar position="static" className="bg-[#FF4500] mb-8">
      <Toolbar className="justify-between">
        <div className="flex items-center gap-2">
          {/* Hamburger menu icon for mobile */}
          <IconButton
            edge="end"
            color="inherit"
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            onClick={() => navigate('/profile')}
            className={`${location.pathname === '/profile' ? 'border-b-2' : ''}`}
          >
            <Typography variant="h6">Reena</Typography>
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              onClick={() => handleMenuClick(item.path)}
              className={`${location.pathname === item.path ? 'border-b-2' : ''}`}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Sidebar drawer */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        >
          <div className="w-64 p-4">
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.path}
                  onClick={() => handleMenuClick(item.path)}
                  className="hover:bg-[#ff6347] text-[#FF4500]" // Hover effect
                >
                  <ListItemIcon className="text-[#FF4500]">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label}  className='text-[#FF4500]'/>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

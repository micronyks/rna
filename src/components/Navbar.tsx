import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import GavelIcon from '@mui/icons-material/Gavel';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static" className="bg-[#FF4500] mb-8">
      <Toolbar className="justify-between">
        <div className="flex items-center gap-2">
          <GavelIcon className="text-3xl" />
          <Typography variant="h6" className="font-serif">
            Reena R. Modi
          </Typography>
        </div>
        <div className="space-x-4">
          <Button
            color="inherit"
            onClick={() => navigate('/profile')}
            className={`font-serif ${location.pathname === '/profile' ? 'border-b-2' : ''}`}
          >
            Profile
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/work')}
            className={`font-serif ${location.pathname === '/work' ? 'border-b-2' : ''}`}
          >
            Work
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
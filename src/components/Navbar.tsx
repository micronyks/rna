import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import BalanceIcon from '@mui/icons-material/Balance';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <AppBar position="static" className="bg-[#FF4500] mb-8">
            <Toolbar className="justify-between">
                <div className="flex items-center gap-2">
                    <BalanceIcon className="text-3xl" />

                    <Button
                        color="inherit"
                        onClick={() => navigate('/profile')}
                        className={`${location.pathname === '/profile' ? 'border-b-2' : ''}`}
                    >
                        <Typography variant="h6">
                            Reena R. Modi
                        </Typography>
                    </Button>

                </div>
                <div className="space-x-4">
                    <Button
                        color="inherit"
                        onClick={() => navigate('/profile')}
                        className={`${location.pathname === '/profile' ? 'border-b-2' : ''}`}
                    >
                        Profile
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/services')}
                        className={`${location.pathname === '/services' ? 'border-b-2' : ''}`}
                    >
                        Services
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/location')}
                        className={`${location.pathname === '/location' ? 'border-b-2' : ''}`}
                    >
                        Location
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
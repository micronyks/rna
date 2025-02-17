import { Card, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';

const Location = () => {
  return (
    <Card className="max-w-6xl mx-auto p-8 shadow-lg">
      <div className="flex items-center gap-2 mb-8">
        <LocationOnIcon className="text-[#FF4500]" />
        <Typography variant="h4" className="text-[#FF4500] font-display">
          Our Locations
        </Typography>
      </div>
      
      <Grid container spacing={4}>
        {/* Court Location */}
        <Grid item xs={12} md={6}>
          <Card className="h-full p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <BusinessIcon className="text-[#FF4500]" />
              <Typography variant="h5" className="text-[#FF4500] font-display">
                Court Office
              </Typography>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <Typography variant="body1" className="font-semibold">
                Table No.42, Room No.113,<br />
                City Civil & Sessions Court,<br />
                Bhadra, Lal Darwaja,<br />
                Ahmedabad-380001
              </Typography>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.938134096122!2d72.57661147599707!3d23.022497779205275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e844c685b2f67%3A0x919d7da23adb4f68!2sCity%20Civil%20%26%20Sessions%20Court!5e0!3m2!1sen!2sin!4v1705935161645!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-sm"
            ></iframe>
          </Card>
        </Grid>

        {/* Residential Location */}
        <Grid item xs={12} md={6}>
          <Card className="h-full p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <HomeIcon className="text-[#FF4500]" />
              <Typography variant="h5" className="text-[#FF4500] font-display">
                Residential Office
              </Typography>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <Typography variant="body1" className="font-semibold">
                68/811, Chandni Appartment,<br />
                Nr. Akashganaga Appartment,<br />
                Sola Road, Naranpura,<br />
                Ahmedabad
              </Typography>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0981750906387!2d72.54738797599766!3d23.047497178901882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83de18115555%3A0x4fe47dd9b2b7d881!2sSola%20Rd%2C%20Naranpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705935567890!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-sm"
            ></iframe>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Location;
import { Card, Typography, Box } from '@mui/material';
import notarySeal from '../assets/notary-seal.svg';
import PhoneIcon from '@mui/icons-material/Phone';

const Profile = () => {
  return (
    <Card className="max-w-3xl mx-auto shadow-lg">
      <div className="flex">
        {/* Left Side - NOTARY text */}
        <div className="bg-[#FF4500] w-24 flex items-center justify-center">
          <Typography
            className="text-white text-4xl font-bold tracking-widest"
            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
          >
            NOTARY
          </Typography>
        </div>

        {/* Right Side - Main Content */}
        <div className="flex-1 p-6">
          {/* Top Section - Mobile Numbers */}
          <div className="flex justify-end mb-6">
            <div>
              <Typography variant="h5" className="font-bold text-right">
                <PhoneIcon /> 88492 57088
              </Typography>
              <Typography variant="h5" className="font-bold text-right">
                <PhoneIcon /> 99785 70535
              </Typography>
            </div>
          </div>

          {/* Middle Section - Name and Title */}
          <div className="flex mb-5 w-full">
            {/* Notary Seal */}
            <div className="float-left flex items-center w-100">
              <img
                src={notarySeal}
                alt="Notary Seal"
                className="object-cover"
              />
            </div>
            <div className='float-right  w-full'>
              <div className='text-center'>
                <Typography variant="h3" className="font-bold mb-2">
                  REENA R. MODI
                </Typography>
              </div>
              <div className='text-center'>
                <Typography variant="h4">
                  Advocate & <span className="text-[#FF4500]">Notary</span>
                </Typography>
              </div>
              <div className='text-center pt-3'>
                <Typography variant="h6" className="text-[#FF4500]">
                  (GOVT. OF INDIA)
                </Typography>
              </div>
            </div>
          </div>

          {/* Bottom Section - Address */}
          <Box className="space-y-2">
            <div className="border-t-2 border-[#FF4500] pt-2 justify-around">
              <Typography variant="subtitle1">
                Court - Table No.42, Room No.113, City Civil & Sessions Court,  Bhadra, Lal Darwaja, Ahmedabad-380001.
              </Typography>
            </div>

            <div className="border-t-2 border-[#FF4500] pt-2 justify-around">
              <Typography variant="subtitle1">
                Home - 68/811, Chandni Appartment, Nr.Akashganaga Appartment, Sola Road, Naranpura, Ahmedabad.
              </Typography>
            </div>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
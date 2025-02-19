import { Card, Typography, Box } from '@mui/material';
import notarySeal from '../assets/notary-seal.svg';
import PhoneIcon from '@mui/icons-material/Phone';

const Profile = () => {
  return (
    <Card className="max-w-3xl mx-auto shadow-lg">
      <div className="flex flex-col sm:flex-row">
        {/* NOTARY text - Horizontal on mobile, Vertical on desktop */}
        <div className="bg-[#FF4500] h-16 sm:h-auto sm:w-24 flex items-center justify-center">
          <Typography
            className="text-white text-4xl font-bold tracking-widest sm:-rotate-90 sm:writing-mode-vertical-lr"
            style={{
              writingMode: 'horizontal-tb',
              // '@media (min-width: 640px)': {
              //   writingMode: 'vertical-lr',
              //   transform: 'rotate(270deg)'
              // }
            }}
          >
            NOTARY
          </Typography>
        </div>

        {/* Right Side - Main Content */}
        <div className="flex-1 p-6">
          {/* Top Section - Mobile Numbers */}
          <div className="flex justify-between mb-6">

            <Typography variant="h5" component="div" className="font-bold text-left gap-2 text-sm sm:text-lg">
              <PhoneIcon className='text-[#FF4500]' /> 88492 57088
            </Typography>
            <Typography variant="h5" component="div" className="font-bold text-right gap-2 text-sm sm:text-lg">
              <PhoneIcon  className='text-[#FF4500]' /> 99785 70535
            </Typography>

          </div>

          {/* Middle Section - Name and Title */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            {/* Notary Seal */}
            <div className="w-32 md:w-40">
              <img
                src={notarySeal}
                alt="Notary Seal"
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 text-center">
              <Typography variant="h3" className="font-bold mb-2 text-2xl md:text-4xl lg:text-4xl text-[#ff4400c8]">
                REENA R. MODI
              </Typography>
              <Typography variant="h4" className="font-bold text-xl md:text-2xl lg:text-2xl text-[#ff4400c8]">
                Advocate & Notary
              </Typography>
              <Typography variant="h6" className="text-[#ff4400c8] mt-3 text-sm font-bold ">
                (GOVT. OF INDIA)
              </Typography>
            </div>
          </div>

          {/* Bottom Section - Address */}
          <Box className="space-y-4">
            <div className="border-t-2 border-[#FF4500] pt-4">
              <Typography variant="subtitle1" className="text-sm md:text-base text-justify">
                <span className='font-bold text-[#ff4400c8]'>Court</span> - Table No.42, Room No.113, City Civil & Sessions Court, Bhadra, Lal Darwaja, Ahmedabad-380001.
              </Typography>
            </div>

            <div className="border-t-2 border-[#FF4500] pt-4">
              <Typography variant="subtitle1" className="text-sm md:text-base text-justify">
              <span className='font-bold text-[#ff4400c8]'>Home</span> - 68/811, Chandni Appartment, Nr.Akashganaga Appartment, Sola Road, Naranpura, Ahmedabad.
              </Typography>
            </div>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
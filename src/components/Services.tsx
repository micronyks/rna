import { Card, Typography, Grid } from '@mui/material';

const Work = () => {
  const services = [
    {
      name: 'Affidavits and Declarations',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Power of Attorney',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Property Documentation',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Agreement and Contract Notarization',
      image: 'https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Will and Testament',
      image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Marriage Registration',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Legal Consultation',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=500',
    },
    {
      name: 'Court Representation',
      image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=500',
    }
  ];

  return (
    <Card className="max-w-6xl mx-auto p-8 shadow-lg">
      <Typography variant="h4" className="mb-8 text-[#FF4500] font-display text-center">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <div className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Typography 
                    variant="h6" 
                    className="text-white font-display text-center text-shadow"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    {service.name}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Work;
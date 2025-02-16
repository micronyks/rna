import { Card, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Work = () => {
  const services = [
    'Affidavits and Declarations',
    'Power of Attorney',
    'Property Documentation',
    'Agreement and Contract Notarization',
    'Will and Testament',
    'Marriage Registration',
    'Legal Consultation',
    'Court Representation'
  ];

  return (
    <Card className="max-w-3xl mx-auto p-8 shadow-lg">
      <Typography variant="h4" className="mb-6 text-[#8B0000] font-serif text-center">
        Our Services
      </Typography>
      <List>
        {services.map((service, index) => (
          <ListItem key={index} className="hover:bg-gray-50">
            <ListItemIcon>
              <AssignmentIcon className="text-[#8B0000]" />
            </ListItemIcon>
            <ListItemText 
              primary={service}
              className="font-serif"
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Work;
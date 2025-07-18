import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { resumeData } from '../data/resumeData';

export default function InvolvementSection() {
  return (
    <Box>
      {resumeData.involvement.map((inv, idx) => (
        <Paper key={idx} elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="subtitle1">{inv.role} - {inv.organization}</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {inv.period}
          </Typography>
          <List dense>
            {inv.details.map((detail: string, i: number) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                <ListItemText primary={detail} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Box>
  );
} 
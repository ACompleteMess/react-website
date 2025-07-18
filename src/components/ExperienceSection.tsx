import { Box, Typography, Chip, Paper, List, ListItem, ListItemText } from '@mui/material';
import { resumeData } from '../data/resumeData';

export default function ExperienceSection() {
  return (
    <Box>
      {resumeData.experience.map((exp, idx) => (
        <Paper key={idx} elevation={2} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">{exp.company}</Typography>
          <Typography variant="subtitle1" color="text.secondary">{exp.title}</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {exp.period} | {exp.location}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>{exp.overview}</Typography>
          <Box sx={{ mb: 1 }}>
            {exp.technologies.map((tech: string) => (
              <Chip key={tech} label={tech} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
            ))}
          </Box>
          <Typography variant="body2" sx={{ mb: 1 }}>{exp.description}</Typography>
          <List dense>
            {exp.achievements.map((ach: string, i: number) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                <ListItemText primary={ach} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Box>
  );
} 
import { Box, Typography, LinearProgress, Paper } from '@mui/material';
import { resumeData } from '../data/resumeData';

// Add index signature to allow dynamic access
interface Skills {
  [key: string]: { name: string; level: number }[];
}

const skillCategories: { key: keyof typeof resumeData.skills; label: string }[] = [
  { key: 'cloudPlatforms', label: 'Cloud Platforms' },
  { key: 'infrastructureAsCode', label: 'Infrastructure as Code' },
  { key: 'ciCdDevOps', label: 'CI/CD & DevOps' },
  { key: 'programming', label: 'Programming & Scripting' },
  { key: 'security', label: 'Security & Compliance' },
  { key: 'leadership', label: 'Leadership & Management' },
];

export default function SkillsSection() {
  const skills: Skills = resumeData.skills;
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {skillCategories.map((cat) => (
        <Box key={cat.key} flexBasis={{ xs: '100%', md: '48%' }} flexGrow={1} minWidth={0}>
          <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>{cat.label}</Typography>
            {skills[cat.key].map((skill) => (
              <Box key={skill.name} mb={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">{skill.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={skill.level} sx={{ height: 8, borderRadius: 4, mb: 0.5 }} />
              </Box>
            ))}
          </Paper>
        </Box>
      ))}
    </Box>
  );
} 
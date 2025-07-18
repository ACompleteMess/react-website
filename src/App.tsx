import { Container, Box, Typography, Divider, IconButton, Tooltip } from '@mui/material';
import { resumeData } from './data/resumeData';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import InvolvementSection from './components/InvolvementSection';
import { useColorMode } from './colorModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PrintIcon from '@mui/icons-material/Print';
import { useTheme } from '@mui/material/styles';

function App() {
  const colorMode = useColorMode();
  const theme = useTheme();
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={4} position="relative">
        <Box position="absolute" top={0} right={0} className="no-print">
          <Tooltip title={`Switch to ${theme.palette.mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Print or Save as PDF">
            <IconButton onClick={() => window.print()} color="inherit">
              <PrintIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="h3" component="h1" gutterBottom>
          {resumeData.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {resumeData.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {resumeData.location} | <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | <a href={`https://${resumeData.linkedin}`}>LinkedIn</a>
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* Summary */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>Professional Summary</Typography>
        <Typography variant="body1" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
          {resumeData.summary}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* Education */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>Education</Typography>
        {resumeData.education.map((edu, idx) => (
          <Box key={idx} mb={1}>
            <Typography variant="subtitle1">{edu.degree}</Typography>
            <Typography variant="body2" color="text.secondary">{edu.school} &bull; {edu.year}</Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* Skills */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>Skills & Technologies</Typography>
        <SkillsSection />
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* Experience */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>Work Experience</Typography>
        <ExperienceSection />
      </Box>
      <Divider sx={{ mb: 3 }} />
      {/* Involvement */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>Professional Involvement</Typography>
        <InvolvementSection />
      </Box>
    </Container>
  );
}

export default App;

import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';
import { describe, it } from 'vitest';
import { resumeData } from '../data/resumeData';

const skillCategories = [
  { key: 'cloudPlatforms', label: 'Cloud Platforms' },
  { key: 'infrastructureAsCode', label: 'Infrastructure as Code' },
  { key: 'ciCdDevOps', label: 'CI/CD & DevOps' },
  { key: 'programming', label: 'Programming & Scripting' },
  { key: 'security', label: 'Security & Compliance' },
  { key: 'leadership', label: 'Leadership & Management' },
];

describe('SkillsSection', () => {
  it('renders all skill category headings from resumeData', () => {
    render(<SkillsSection />);
    for (const cat of skillCategories) {
      expect(screen.getByText(new RegExp(cat.label, 'i'))).toBeInTheDocument();
    }
  });
}); 
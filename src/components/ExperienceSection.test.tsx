import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';
import { describe, it } from 'vitest';
import { resumeData } from '../data/resumeData';

describe('ExperienceSection', () => {
  it('renders all company names from resumeData', () => {
    render(<ExperienceSection />);
    for (const exp of resumeData.experience) {
      const matches = screen.getAllByText((content, node) => {
        if (!node) return false;
        return (
          node.tagName.toLowerCase().startsWith('h') &&
          content.toLowerCase().includes(exp.company.toLowerCase())
        );
      });
      expect(matches.length).toBeGreaterThan(0);
    }
  });
}); 
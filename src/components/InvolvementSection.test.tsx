import { render, screen } from '@testing-library/react';
import InvolvementSection from './InvolvementSection';
import { describe, it } from 'vitest';
import { resumeData } from '../data/resumeData';

describe('InvolvementSection', () => {
  it('renders all organization names from resumeData', () => {
    render(<InvolvementSection />);
    for (const inv of resumeData.involvement) {
      const matches = screen.getAllByText((content, node) => {
        if (!node) return false;
        return (
          node.tagName.toLowerCase().startsWith('h') &&
          content.toLowerCase().includes(inv.organization.toLowerCase())
        );
      });
      expect(matches.length).toBeGreaterThan(0);
    }
  });
}); 
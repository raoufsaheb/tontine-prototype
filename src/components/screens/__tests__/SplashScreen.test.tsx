import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SplashScreen } from '../SplashScreen';

describe('SplashScreen', () => {
  it('renders correctly', () => {
    render(<SplashScreen />);
    
    expect(screen.getByText('جمعية')).toBeInTheDocument();
    expect(screen.getByText('ادخر معاً... ننمو معاً')).toBeInTheDocument();
  });

  it('has gradient background', () => {
    render(<SplashScreen />);
    
    const container = screen.getByText('جمعية').parentElement?.parentElement;
    expect(container).toHaveClass('bg-gradient-to-br');
  });
});

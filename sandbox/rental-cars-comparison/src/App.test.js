import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rental Cars Comparison title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rental Cars Comparison/i);
  expect(linkElement).toBeInTheDocument();
});

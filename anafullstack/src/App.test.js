import { render, screen } from '@testing-library/react';
import App from './App';

test('renders recode link', () => {
  render(<App />);
  const linkElement = screen.getByText(/recode/i);
  expect(linkElement).toBeInTheDocument();
});

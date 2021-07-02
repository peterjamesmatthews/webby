import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from '.';

test('renders current time', () => {
  render(<App />);
  const currentTime = screen.getByText(/current time/i);
  expect(currentTime).toBeInTheDocument();
});

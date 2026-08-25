import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the quiz menu', () => {
  render(<App />);
  const menuTitle = screen.getByText(/central de quizzes/i);
  expect(menuTitle).toBeInTheDocument();
});

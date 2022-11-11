import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("renders subscribe to mailing list form", () =>{
  render(<App />);
  expect(screen.getByText(/subscribe for updates/i));
})

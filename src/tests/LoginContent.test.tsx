import { render, screen } from '@testing-library/react';
import LoginContent from '../components/login/LoginContent';
import '@testing-library/jest-dom/extend-expect';

describe('LoginContent', () => {
  it('renders the brand name', () => {
    render(<LoginContent />);
    const brandElement = screen.getByText('Envelope');
    expect(brandElement).toBeInTheDocument();
  });

  it('renders the content title', () => {
    render(<LoginContent />);
    const contentTitleElement = screen.getByText(/Introducing our/i);
    expect(contentTitleElement).toBeInTheDocument();
  });

  it('renders the top content', () => {
    render(<LoginContent />);
    const topContentElement = screen.getByText(
      /Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cum soluta nisi officiis/i
    );
    expect(topContentElement).toBeInTheDocument();
  });

  it('renders the View Report button', () => {
    render(<LoginContent />);
    const viewReportButton = screen.getByRole('button', {
      name: /View Report/i,
    });
    expect(viewReportButton).toBeInTheDocument();
  });
});

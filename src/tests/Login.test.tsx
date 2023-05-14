import { render, screen } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import Login from 'src/components/login/Login';

describe('Login', () => {
  test('renders LoginContent and LoginForm components', () => {
    render(<Login />);

    expect(screen.getByTestId('login-content')).toBeInTheDocument();

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});

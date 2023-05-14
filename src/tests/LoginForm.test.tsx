import { fireEvent, waitFor } from '@testing-library/react';
import { render } from './test-utils';
import { within } from '@testing-library/dom';
import LoginForm from '../components/login/LoginForm';
import '@testing-library/jest-dom/extend-expect';

describe('LoginForm', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText('Welcome back')).toBeInTheDocument();
  });

  test('submits form with valid input', async () => {
    const { getByLabelText, getByRole, container } = render(<LoginForm />);

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'p@s$w0rd' },
    });

    const submitButton = getByRole('button', { name: /Sign in/i });
    fireEvent.click(submitButton);

    await waitFor(() => within(container).findByText('Login successful'), {
      timeout: 5000,
    });
    expect(
      within(container).queryByText('Login successful')
    ).toBeInTheDocument();
  });

  test('shows error message for invalid input', async () => {
    const { getByLabelText, getByRole, container } = render(<LoginForm />);

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'wrong_password' },
    });

    const submitButton = getByRole('button', { name: /Sign in/i });
    fireEvent.click(submitButton);

    await waitFor(() => within(container).findByText('Invalid password'), {
      timeout: 5000,
    });
    expect(
      within(container).queryByText('Invalid password')
    ).toBeInTheDocument();
  });

  // New test case for invalid email
  test('shows error message for invalid email', async () => {
    const { getByLabelText, getByRole, container } = render(<LoginForm />);

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'a@a' },
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'p@s$w0rd' },
    });

    const submitButton = getByRole('button', { name: /Sign in/i });
    fireEvent.click(submitButton);

    await waitFor(() => within(container).findByText('Invalid email address'), {
      timeout: 5000,
    });
    expect(
      within(container).queryByText('Invalid email address')
    ).toBeInTheDocument();
  });
});

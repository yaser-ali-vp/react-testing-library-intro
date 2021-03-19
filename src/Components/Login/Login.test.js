import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';

test('renders Login component', () => {
    render(<Login />);

    const linkElement = screen.getByText('Existing user login here');
    
    expect(linkElement).toBeInTheDocument();
    
});

test('Check the input field required message is appeared or not', () => {
    const { getByText } = render(<Login />);
    const linkElement = screen.getByText('Login');
    fireEvent.click(linkElement);
    waitFor(() => screen.getByText('All fields are required'));

    expect(screen.getByText('All fields are required')).toBeInTheDocument();
});

test('Check the error message is appeared or not', () => {
    const { getByText } = render(<Login />);
    const uname = screen.getByTestId('username-field');
    const password = screen.getByTestId('password-field');

    fireEvent.change(uname, { target: { value: "username" } });
    fireEvent.change(password, { target: { value: "passw123" } });

    const linkElement = screen.getByText('Login');

    fireEvent.click(linkElement);

    waitFor(() => screen.getByText('Incorrect username or password'));

    expect(screen.getByText('Incorrect username or password')).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Button from '../Button';

const BUTTON_TEXT = "hello"
const buttonClickMockFn = jest.fn();

beforeEach(() => {
  render(<Button text={BUTTON_TEXT} onClick={buttonClickMockFn}/>)
})

it("Button prints text currently", () => {
  expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument()
  expect(screen.getByTestId('my-special-button')).toHaveTextContent(/im a button/i)
})

it("On button click invoke function", () => {
  userEvent.click(screen.getByText(BUTTON_TEXT));
  expect(buttonClickMockFn).toBeCalledWith("click test")
})
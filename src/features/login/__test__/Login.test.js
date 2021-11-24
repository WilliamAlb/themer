import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitForDomChange } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as FirBaseAuthModule from "@firebase/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "../Login";

const loginMockFn = jest.fn();
const mockServer = setupServer(rest.post('https://identitytoolkit.googleapis.com/v1/*',(req,res,context) => {
  loginMockFn(req.body)
  return res(context.json({username: "shit"}))
}))

beforeAll(() => {
  mockServer.listen()
})

afterEach(() => {
  mockServer.resetHandlers()
})

afterAll(() => {
  mockServer.close()
})

const setup = () => {
  const component = (
    <Router>
      <Login />
    </Router>
  );
  render(component);
};

const getEmailInput = () => screen.getByLabelText(/email/i);
const getPasswordInput = () => screen.getByLabelText(/password/i);
const getSubmitButton = () => screen.getByDisplayValue(/login/i);

describe("login", () => {
  it("when empty state button should be disabled", () => {
    setup();
    // expect(getSubmitButton()).toBeDisabled();
  });

  it("On goto register page link click should navigate to register", () => {});

  it("On firebase error should display popup", async () => {
    setup();

    userEvent.type(getEmailInput(), "email@gmail.com");
    userEvent.type(getPasswordInput(), "Aa12345!");
    expect(getSubmitButton()).not.toBeDisabled();

    userEvent.click(getSubmitButton());

    // IMPLEMENT ON ERROR INSTEAD OF SUCCESS
    await waitForDomChange(() => {
      expect(getEmailInput()).toHaveValue('')
      expect(getPasswordInput()).toHaveValue('')
    });

    expect(loginMockFn.mock.calls[0]).toMatchSnapshot()
  });

  it("When form is valid end fire submit should call firebase", async () => {
    const mockFn = jest
      .spyOn(FirBaseAuthModule, "signInWithEmailAndPassword")
      .mockImplementation(() => {
        return new Promise((res, rej) => res());
      });
    setup();

    userEvent.type(getEmailInput(), "email@gmail.com");
    userEvent.type(getPasswordInput(), "Aa12345!");
    expect(getSubmitButton()).not.toBeDisabled();

    userEvent.click(getSubmitButton());
    const [auth, email, password] = mockFn.mock.calls[0];
    expect({ auth, email, password }).toMatchSnapshot();
    expect(password).toMatchInlineSnapshot(`"Aa12345!"`);

    await waitForDomChange(() => {
      expect(getEmailInput()).toHaveValue('')
      expect(getPasswordInput()).toHaveValue('')
    })

  });

  
});

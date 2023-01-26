import { IPublicClientApplication, AccountInfo, AuthenticationResult, AuthError } from '@azure/msal-browser';
/**
 * msal-react tester. Useful to tests your components requiring to be logged in, using msal-react
 * @example
 *
  let msalTester: MsalReactTester;
  beforeEach(() => {
    // new instance of msal tester for each test
    msalTester = new MsalReactTester();
    // spy all required msal things
    msalTester.spyMsal();
  });

  afterEach(() => {
    msalTester.resetSpyMsal();
  });

  test('Home page render correctly when user is not logged', async () => {
    msalTester.isNotLogged();
    render(
      <MsalProvider instance={msalTester.client}>
        <MemoryRouter>
          <Layout>
            <HomePage />
          </Layout>
        </MemoryRouter>
      </MsalProvider>,
    );
    await msalTester.waitForRedirect();
    expect(screen.getByText(/Please sign-in/)).toBeInTheDocument();
  });

 */
declare class MsalReactTester {
    interationType: 'Redirect' | 'Popup';
    private _eventCallbacks;
    private _handleRedirectSpy;
    private _loginRedirectSpy;
    private _loginPopupSpy;
    private _logoutRedirectSpy;
    private _logoutPopupSpy;
    private _testAccountInfo;
    private _testAuthenticationResult;
    private _testRunner;
    client: IPublicClientApplication;
    accounts: AccountInfo[];
    activeAccount: AccountInfo | null;
    error: AuthError;
    /**
     * Create a new mock IPublicClientApplication instance
     * @param testAccountInfo test account you want to use. A default is created if null
     * @param testAuthenticationResult test authentication result you want to use . A default is created is null
     */
    constructor(interationType?: 'Redirect' | 'Popup', testAccountInfo?: AccountInfo, testAuthenticationResult?: AuthenticationResult, testAuthError?: AuthError);
    /**
     * Initialize the IPublicClientApplication with an active account.
     */
    isLogged(): void;
    /**
     * Initialize the IPublicClientApplication with no active account
     */
    isNotLogged(): void;
    /**
     * Reset all spy / mocks. Should be used in `afterEach` call:
     *
     *  @example
     *  afterEach(() => {
     *   msalTester.resetSpyMsal();
     * });
     */
    resetSpyMsal(): void;
    /**
     * Wait for login process to be done
     */
    waitForLogin(): Promise<void>;
    /**
     * Wait for redirect handled by MSAL to be done
     */
    waitForRedirect(): Promise<void>;
    /**
     * Wait for logout process to be done
     */
    waitForLogout(): Promise<void>;
    /**
    * Spy and Mocks required MSAL things. Should be used in `beforeEach` call:
    *
    *  @example
    *    let msalTester: MsalReactTester;
         beforeEach(() => {
           // new instance of msal tester for each test
           msalTester = new MsalReactTester();
           // spy all required msal things
           msalTester.spyMsal();
         });
    * });
    */
    spyMsal(): void;
    generateFailure(): void;
    static GetNewClient: (testAccountInfo: AccountInfo, testAuthenticationResult: AuthenticationResult) => IPublicClientApplication;
}
export default MsalReactTester;



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var msalBrowser = require('@azure/msal-browser');
var react = require('@testing-library/react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var MsalReactTesterPlugin = /** @class */ (function () {
    function MsalReactTesterPlugin() {
    }
    MsalReactTesterPlugin.init = function (testRunner) {
        if (testRunner === void 0) { testRunner = null; }
        if (testRunner) {
            MsalReactTesterPlugin.TestRunner = testRunner;
        }
    };
    MsalReactTesterPlugin.TestRunner = {
        spyOn: typeof jest !== 'undefined' ? jest.spyOn : function () { },
        expect: typeof jest !== 'undefined' ? expect : function () { },
        resetAllMocks: typeof jest !== 'undefined' ? jest.resetAllMocks : function () { },
        waitingFor: typeof jest !== 'undefined' ? react.waitFor : function () { }
    };
    return MsalReactTesterPlugin;
}());

var TEST_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzY3AiOiJVc2VyLlJlYWQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jb250b3NvIiwiYXBwX2Rpc3BsYXluYW1lIjoiYXBwbGljYXRpb24tbmFtZSIsInRpZCI6InRlbmFudC1pZCIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJYWCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMCIsInVuaXF1ZV9uYW1lIjoiam9obi5kb2VAY29udG9zby5jb20iLCJuYmYiOiIxNjU2NTk5NjI2IiwiYXBwaWQiOiJhcHAtaWQiLCJuYW1lIjoiSm9obiBEb2UiLCJleHAiOiIxNjU2NjA0NzY3IiwiaWF0IjoiMTY1NjU5OTYyNiIsImVtYWlsIjoiam9obi5kb2VAY29udG9zby5jb20ifQ.ftOvEUhqEFKWxIcxcYsgstgldO-31hIVwEhQ0hwwqWg';
//
// Token parsed is equal to :
//
/**

 {
  "alg": "HS256"
 }.{
  "aud": "00000003-0000-0000-c000-000000000000",
  "iss": "https://sts.windows.net/contoso",
  "nbf": "1656599626",
  "iat": "1656599626",
  "exp": "1656604767",
  "app_displayname": "application-name",
  "tid": "tenant-id",
  "tenant_region_scope": "XX",
  "unique_name": "john.doe@contoso.com",
  "appid": "app-id",
  "name": "John Doe",
  "email": "john.doe@contoso.com",
  "scp": "User.Read"
}.[Signature]

 
 */
var defaultTestAccountInfo = {
    homeAccountId: "home-account-id",
    localAccountId: "local-account-id",
    environment: 'login.windows.net',
    tenantId: "tenant-id",
    username: 'john.doe@contoso.com',
    name: 'John Doe',
};
var defaultTestAuthenticationResult = {
    authority: 'https://login.microsoftonline.com',
    uniqueId: 'unique-id',
    tenantId: 'tenant-id',
    scopes: ['openid', 'profile'],
    idToken: 'test-id-token',
    idTokenClaims: {},
    accessToken: TEST_ACCESS_TOKEN,
    fromCache: false,
    correlationId: 'test-correlation-id',
    expiresOn: new Date(Date.now() + 3600000),
    account: defaultTestAccountInfo,
    tokenType: 'Bearer',
};
var defaultTestAuthError = {
    errorCode: 'test-error-code',
    errorMessage: 'test-error-message',
    subError: '',
    correlationId: '',
    setCorrelationId: function (correlationId) {
        this.correlationId = correlationId;
    },
    name: 'test-error',
    message: 'test-message',
};

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
var MsalReactTester = /** @class */ (function () {
    /**
     * Create a new mock IPublicClientApplication instance
     * @param testAccountInfo test account you want to use. A default is created if null
     * @param testAuthenticationResult test authentication result you want to use . A default is created is null
     */
    function MsalReactTester(interationType, testAccountInfo, testAuthenticationResult, testAuthError) {
        if (interationType === void 0) { interationType = 'Redirect'; }
        if (testAccountInfo === void 0) { testAccountInfo = defaultTestAccountInfo; }
        if (testAuthenticationResult === void 0) { testAuthenticationResult = defaultTestAuthenticationResult; }
        if (testAuthError === void 0) { testAuthError = defaultTestAuthError; }
        this.interationType = interationType;
        this._eventCallbacks = [];
        this.accounts = [];
        this.activeAccount = null;
        this._testRunner = MsalReactTesterPlugin.TestRunner;
        this._testAccountInfo = testAccountInfo;
        this._testAuthenticationResult = testAuthenticationResult;
        this.error = testAuthError;
        this.client = MsalReactTester.GetNewClient(testAccountInfo, testAuthenticationResult);
    }
    /**
     * Initialize the IPublicClientApplication with an active account.
     */
    MsalReactTester.prototype.isLogged = function () {
        this.accounts = [this._testAccountInfo];
        this.activeAccount = this._testAccountInfo;
    };
    /**
     * Initialize the IPublicClientApplication with no active account
     */
    MsalReactTester.prototype.isNotLogged = function () {
        this.accounts = [];
        this.activeAccount = null;
    };
    /**
     * Reset all spy / mocks. Should be used in `afterEach` call:
     *
     *  @example
     *  afterEach(() => {
     *   msalTester.resetSpyMsal();
     * });
     */
    MsalReactTester.prototype.resetSpyMsal = function () {
        this._testRunner.resetAllMocks();
        this.accounts = [];
        this.activeAccount = null;
        this._eventCallbacks = [];
    };
    /**
     * Wait for login process to be done
     */
    MsalReactTester.prototype.waitForLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._handleRedirectSpy).toHaveBeenCalledTimes(1); })];
                    case 1:
                        _a.sent();
                        if (!(this.interationType === 'Redirect')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._loginRedirectSpy).toHaveBeenCalledTimes(1); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._loginPopupSpy).toHaveBeenCalledTimes(1); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Wait for redirect handled by MSAL to be done
     */
    MsalReactTester.prototype.waitForRedirect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._handleRedirectSpy).toHaveBeenCalledTimes(1); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Wait for logout process to be done
     */
    MsalReactTester.prototype.waitForLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._handleRedirectSpy).toHaveBeenCalledTimes(1); })];
                    case 1:
                        _a.sent();
                        if (!(this.interationType === 'Redirect')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._logoutRedirectSpy).toHaveBeenCalledTimes(1); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this._testRunner.waitingFor(function () { return _this._testRunner.expect(_this._logoutPopupSpy).toHaveBeenCalledTimes(1); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
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
    MsalReactTester.prototype.spyMsal = function () {
        var _this = this;
        var eventId = 0;
        this._testRunner.spyOn(this.client, 'addEventCallback').mockImplementation(function (callbackFn) {
            _this._eventCallbacks.push(callbackFn);
            eventId += 1;
            return eventId.toString();
        });
        // send a message to say "hey we made redirect start then end"
        this._handleRedirectSpy = this._testRunner.spyOn(this.client, 'handleRedirectPromise').mockImplementation(function () {
            var eventStart = {
                eventType: msalBrowser.EventType.HANDLE_REDIRECT_START,
                interactionType: msalBrowser.InteractionType.Redirect,
                payload: null,
                error: null,
                timestamp: 10000,
            };
            _this._eventCallbacks.forEach(function (callback) {
                callback(eventStart);
            });
            var eventEnd = {
                eventType: msalBrowser.EventType.HANDLE_REDIRECT_END,
                interactionType: msalBrowser.InteractionType.Redirect,
                payload: null,
                error: null,
                timestamp: 10000,
            };
            _this._eventCallbacks.forEach(function (callback) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    callback(eventEnd);
                    return [2 /*return*/];
                });
            }); });
            return Promise.resolve(null);
        });
        this._loginRedirectSpy = this._testRunner.spyOn(this.client, 'loginRedirect').mockImplementation(function (request) { return __awaiter(_this, void 0, void 0, function () {
            var eventMessage;
            return __generator(this, function (_a) {
                this.accounts = [this._testAccountInfo];
                this.activeAccount = this._testAccountInfo;
                eventMessage = {
                    eventType: msalBrowser.EventType.LOGIN_SUCCESS,
                    interactionType: msalBrowser.InteractionType.Redirect,
                    payload: this._testAuthenticationResult,
                    error: null,
                    timestamp: 10000,
                };
                this._eventCallbacks.forEach(function (callback) {
                    callback(eventMessage);
                });
                return [2 /*return*/, Promise.resolve()];
            });
        }); });
        this._loginPopupSpy = this._testRunner.spyOn(this.client, "loginPopup").mockImplementation(function (request) { return __awaiter(_this, void 0, void 0, function () {
            var eventMessage;
            return __generator(this, function (_a) {
                this.accounts = [this._testAccountInfo];
                this.activeAccount = this._testAccountInfo;
                eventMessage = {
                    eventType: msalBrowser.EventType.LOGIN_SUCCESS,
                    interactionType: msalBrowser.InteractionType.Popup,
                    payload: this._testAuthenticationResult,
                    error: null,
                    timestamp: 10000
                };
                this._eventCallbacks.forEach(function (callback) {
                    callback(eventMessage);
                });
                return [2 /*return*/, Promise.resolve(this._testAuthenticationResult)];
            });
        }); });
        this._logoutRedirectSpy = this._testRunner.spyOn(this.client, 'logoutRedirect').mockImplementation(function (request) { return __awaiter(_this, void 0, void 0, function () {
            var eventMessage;
            return __generator(this, function (_a) {
                this.accounts = [];
                this.activeAccount = null;
                eventMessage = {
                    eventType: msalBrowser.EventType.LOGOUT_SUCCESS,
                    interactionType: msalBrowser.InteractionType.Redirect,
                    payload: this._testAuthenticationResult,
                    error: null,
                    timestamp: 10000,
                };
                this._eventCallbacks.forEach(function (callback) {
                    callback(eventMessage);
                });
                return [2 /*return*/, Promise.resolve()];
            });
        }); });
        this._logoutPopupSpy = this._testRunner.spyOn(this.client, 'logoutPopup').mockImplementation(function (request) { return __awaiter(_this, void 0, void 0, function () {
            var eventMessage;
            return __generator(this, function (_a) {
                this.accounts = [];
                this.activeAccount = null;
                eventMessage = {
                    eventType: msalBrowser.EventType.LOGOUT_SUCCESS,
                    interactionType: msalBrowser.InteractionType.Popup,
                    payload: this._testAuthenticationResult,
                    error: null,
                    timestamp: 10000,
                };
                this._eventCallbacks.forEach(function (callback) {
                    callback(eventMessage);
                });
                return [2 /*return*/, Promise.resolve()];
            });
        }); });
        this._testRunner.spyOn(this.client, 'getAllAccounts').mockImplementation(function () { return _this.accounts; });
        this._testRunner.spyOn(this.client, 'getActiveAccount').mockImplementation(function () { return _this.activeAccount; });
        this._testRunner.spyOn(this.client, 'setActiveAccount').mockImplementation(function (account) { return (_this.activeAccount = account); });
    };
    MsalReactTester.prototype.generateFailure = function () {
        var _this = this;
        if (this.interationType === 'Redirect') {
            if (this._loginRedirectSpy)
                this._loginRedirectSpy.mockClear();
            this._loginRedirectSpy = this._testRunner.spyOn(this.client, 'loginRedirect').mockImplementation(function (request) { return __awaiter(_this, void 0, void 0, function () {
                var eventMessage;
                return __generator(this, function (_a) {
                    eventMessage = {
                        eventType: msalBrowser.EventType.LOGIN_FAILURE,
                        interactionType: msalBrowser.InteractionType.Redirect,
                        payload: null,
                        error: this.error,
                        timestamp: 10000,
                    };
                    this._eventCallbacks.forEach(function (callback) {
                        callback(eventMessage);
                    });
                    return [2 /*return*/, Promise.resolve()];
                });
            }); });
        }
        else {
            if (this._loginPopupSpy)
                this._loginPopupSpy.mockClear();
            this._loginPopupSpy = this._testRunner.spyOn(this.client, "loginPopup").mockImplementation(function () { return __awaiter(_this, void 0, void 0, function () {
                var eventMessage;
                return __generator(this, function (_a) {
                    eventMessage = {
                        eventType: msalBrowser.EventType.LOGIN_FAILURE,
                        interactionType: msalBrowser.InteractionType.Popup,
                        payload: null,
                        error: this.error,
                        timestamp: 10000
                    };
                    this._eventCallbacks.forEach(function (callback) {
                        callback(eventMessage);
                    });
                    return [2 /*return*/, Promise.resolve(null)];
                });
            }); });
        }
    };
    MsalReactTester.GetNewClient = function (testAccountInfo, testAuthenticationResult) {
        var logger = new msalBrowser.Logger({
            loggerCallback: function (_level, _message, _containsPii) { },
            piiLoggingEnabled: false,
            logLevel: msalBrowser.LogLevel.Error,
            correlationId: 'mock_test',
        });
        return {
            initialize: function () { return Promise.resolve(); },
            acquireTokenPopup: function () { return Promise.resolve(testAuthenticationResult); },
            acquireTokenRedirect: function () { return Promise.resolve(); },
            acquireTokenSilent: function () { return Promise.resolve(testAuthenticationResult); },
            acquireTokenByCode: function () { return Promise.resolve(testAuthenticationResult); },
            getAllAccounts: function () { return [testAccountInfo]; },
            getAccountByHomeId: function () { return testAccountInfo; },
            getAccountByUsername: function () { return testAccountInfo; },
            getAccountByLocalId: function () { return testAccountInfo; },
            handleRedirectPromise: function () { return Promise.resolve(testAuthenticationResult); },
            loginPopup: function () { return Promise.resolve(testAuthenticationResult); },
            loginRedirect: function () { return Promise.resolve(); },
            logout: function () { return Promise.resolve(); },
            logoutRedirect: function () { return Promise.resolve(); },
            logoutPopup: function () { return Promise.resolve(); },
            ssoSilent: function () { return Promise.resolve(testAuthenticationResult); },
            addEventCallback: function () { return null; },
            removeEventCallback: function () { return; },
            addPerformanceCallback: function () { return ''; },
            removePerformanceCallback: function () { return false; },
            enableAccountStorageEvents: function () { return; },
            disableAccountStorageEvents: function () { return; },
            getTokenCache: function () { return null; },
            setLogger: function () { return; },
            setActiveAccount: function () { return; },
            getActiveAccount: function () { return testAccountInfo; },
            initializeWrapperLibrary: function () { return; },
            setNavigationClient: function () { return; },
            getLogger: function () { return logger; },
            getConfiguration: function () { return null; },
        };
    };
    return MsalReactTester;
}());

exports.MsalReactTester = MsalReactTester;
exports.MsalReactTesterPlugin = MsalReactTesterPlugin;
//# sourceMappingURL=index.js.map

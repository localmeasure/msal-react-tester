export interface ITestRunner {
    spyOn: Function;
    expect: Function;
    resetAllMocks: Function;
    waitingFor: Function;
}
export declare class MsalReactTesterPlugin {
    static TestRunner: ITestRunner;
    static init(testRunner?: ITestRunner): void;
}

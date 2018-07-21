import { AuthConnectorModule } from './auth-connector.module';

describe('AuthConnectorModule', () => {
  let authConnectorModule: AuthConnectorModule;

  beforeEach(() => {
    authConnectorModule = new AuthConnectorModule();
  });

  it('should create an instance', () => {
    expect(authConnectorModule).toBeTruthy();
  });
});

describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('auth input should be visible', async () => {
      await expect(element(by.id('authInput'))).toBeVisible();
    });
  
    it('should sign in and show profiles after tap', async () => {
      await element(by.id('loginInput')).typeText('Astro');
      await element(by.id('passwordInput')).typeText('Astro');
      await element(by.id('signInButton')).tap();
      await expect(element(by.id('cardsView'))).toBeVisible();
    });
  
    it('should show world screen after tap', async () => {
      await element(by.id('signUpButton')).tap();
      await expect(element(by.id('usernameInput'))).toBeVisible();
    });
  });
  
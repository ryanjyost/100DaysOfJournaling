AccountsTemplates.configure({
  // Behavior
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  enforceEmailVerification: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: "privacy-policy",
  termsUrl: "terms-of-service",

  // Redirects
  homeRoutePath: "/",
  redirectTimeout: 4000,

  // Hooks
  // onLogoutHook: myLogoutFunc,
  // onSubmitHook: mySubmitFunc,
  // preSignUpHook: myPreSubmitFunc,
  // postSignUpHook: myPostSubmitFunc,

  // Texts
  texts: {
    button: {
      signUp: "Create an account",
      signIn: "Log in"
    },
    signUpLink_pre: "Want to develop a journaling habit?",
    signUpLink_link: "Create an account",
    signInLink_pre: "Already have an account?",
    signInLink_link: "Log In",

    title: {
      forgotPwd: "Recover Your Password",
      signUp: "Start the challenge",
      signIn: ""
    }
  }
});

// Accounts.config({
//   sendVerificationEmail: true
// });

import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { microsoftAuthApiRef } from '@backstage/core-plugin-api';

export const providers = [
  {
    id: 'github-auth-provider',
    title: 'GitHub',
    message: 'Sign in using GitHub',
    apiRef: githubAuthApiRef,
  },
  {
    id: 'microsoft-auth-provider',
    title: 'Azure Active Directory',
    message: 'Sign in using Azure AD',
    apiRef: microsoftAuthApiRef,
  },
];

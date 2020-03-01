import Keycloak from 'keycloak-js';

export default function configureSSO() {
  console.log('Initializing keycloak');
  const keycloak = Keycloak('./keycloak.json');
  keycloak
    .init({ onLoad: 'login-required' })
    .success(authenticated => {
      console.log(keycloak);
      localStorage.setItem('currentUser', JSON.stringify(keycloak.idTokenParsed));
    })
    .error(err => {
      console.error('Failed login.');
    });
}

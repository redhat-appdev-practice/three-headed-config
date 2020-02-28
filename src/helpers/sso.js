import Keycloak from 'keycloak-js';

export default function configureSSO() {
  const keycloak = Keycloak('./keycloak.json');
  keycloak
    .init({ onLoad: 'login-required' })
    .success(authenticated => {
      console.log(keycloak);
      localStorage.setItem(JSON.stringify(keycloak.idTokenParsed));
    })
    .error(err => {
      console.error('Failed login.');
    });
}

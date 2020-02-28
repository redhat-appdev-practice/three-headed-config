export function fakeAuth(url, options) {
  let users = [
    {
      id: 0,
      email: 'lreed@vu.com',
      name: 'Lou Reed',
      password: '123',
      role: 'admin'
    },
    {
      id: 1,
      email: 'jcale@vu.com',
      name: 'John Cale',
      password: '123',
      role: 'user'
    },
    {
      id: 2,
      email: 'smorrison@vu.com',
      name: 'Sterling Morrison',
      password: '123',
      role: 'user'
    }
  ];

  return new Promise((resolve, reject) => {
    // authenticate - public
    if (url.endsWith('/login') && options.method === 'POST') {
      const params = JSON.parse(options.body);
      const user = users.find(
        x => x.email === params.email && x.password === params.password
      );

      if (!user) return error('Username or password is incorrect');

      return ok({
        email: user.email,
        role: user.role,
        name: user.name,
        token: `fake-jwt-token.${user.role}`
      });
    }

    // private helper functions
    function ok(body) {
      resolve({
        ok: true,
        text: () => Promise.resolve(JSON.stringify(body))
      });
    }

    function error(message) {
      resolve({
        status: 400,
        text: () => Promise.resolve(JSON.stringify({ message }))
      });
    }
  });
}

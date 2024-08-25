const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';

function requireAuth(req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/admin/signin');
      } else {
        req.userId = decodedToken.id;
        next();
      }
    });
  } else {
    res.redirect('/admin/signin');
  }
}

module.exports = { requireAuth };

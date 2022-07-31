module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8326bfadae27eea9c542d8e88fe9de6'),
  },
});

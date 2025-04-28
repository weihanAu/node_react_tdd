
//readings/readings.data.js

const generateAllMeters = () => {
  const readings = {};

  Object.keys(meters).map((key) => {
    readings[meters[key]] = generateSingle();
  });

  return readings;
};


// 0 ennpoint protection, oauth2, jwt
const authHeader = req.headers['authorization']; // 或 req.get('Authorization')
let token = null;

if (authHeader && authHeader.startsWith('Bearer ')) {
  token = authHeader.split(' ')[1]; // 提取 Bearer 后面的 token
}
// 1 missing error handler middle ware {Add Error Handling Middleware}
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
// 2 missing status code return
// 3 no imput validation
// 4 No Route Grouping -- reading route, price-plan route { Extract Route Handlers into Controllers }
// 5. Extract Configuration 
module.exports = {
  port: process.env.PORT || 8080,
}
const config = require("./config");
app.listen(config.port);
console.log(`🚀 app listening on port ${config.port}`);

// using dotenv to manage 

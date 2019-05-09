const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const port = 3030;
const url = "mongodb://localhost:27017/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  res.status(200);
});

app.post('/', (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    useNewUrlParser = true;
    var purchase = db.db('purchase');
    purchase.collection('purchases').insertOne(req.body, err => {
      if (err) throw err;
      db.close();
      res.status(201);
      console.log('successfully inserted');
    });
  });
});

app.listen(port, () => console.log(`Port is running on ${port}!`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBhdGgiLCJib2R5UGFyc2VyIiwiTW9uZ29DbGllbnQiLCJwb3J0IiwidXJsIiwiZXh0ZW5kZWQiLCJyZXMiLCJjb25zb2xlIiwicmVxIiwidXNlTmV3VXJsUGFyc2VyIiwicHVyY2hhc2UiLCJkYiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVUMsUUFBaEIsU0FBZ0JBLENBQWhCO0FBQ0EsTUFBTUMsTUFBTixTQUFBO0FBQ0EsTUFBTUMsT0FBT0YsUUFBYixNQUFhQSxDQUFiO0FBQ0EsTUFBTUcsYUFBYUgsUUFBbkIsYUFBbUJBLENBQW5CO0FBQ0EsTUFBTUksY0FBY0osUUFBQUEsU0FBQUEsRUFBcEIsV0FBQTtBQUNBLE1BQU1LLE9BQU4sSUFBQTtBQUNBLE1BQU1DLE1BQU4sNEJBQUE7O0FBRUFMLElBQUFBLEdBQUFBLENBQVFFLFdBQVJGLElBQVFFLEVBQVJGO0FBQ0FBLElBQUFBLEdBQUFBLENBQVFFLFdBQUFBLFVBQUFBLENBQXNCLEVBQUNJLFVBQS9CTixLQUE4QixFQUF0QkUsQ0FBUkY7QUFDQUEsSUFBQUEsR0FBQUEsQ0FBUUYsUUFBQUEsTUFBQUEsQ0FBUkUsUUFBUUYsQ0FBUkU7O0FBRUFBLElBQUFBLEdBQUFBLENBQUFBLEdBQUFBLEVBQWEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxLQUFjO0FBQ3pCTyxNQUFBQSxRQUFBQSxDQUFhTixLQUFBQSxJQUFBQSxDQUFBQSxTQUFBQSxFQUFiTSxZQUFhTixDQUFiTTtBQUNBQSxNQUFBQSxNQUFBQSxDQUFBQSxHQUFBQTtBQUZGUCxDQUFBQTs7QUFLQUEsSUFBQUEsSUFBQUEsQ0FBQUEsR0FBQUEsRUFBYyxDQUFBLEdBQUEsRUFBQSxHQUFBLEtBQWM7QUFDMUJRLFVBQUFBLEdBQUFBLENBQVlDLElBQVpELElBQUFBO0FBQ0FMLGNBQUFBLE9BQUFBLENBQUFBLEdBQUFBLEVBQXlCLENBQUEsR0FBQSxFQUFBLEVBQUEsS0FBYTtBQUNwQyxRQUFBLEdBQUEsRUFBUyxNQUFBLEdBQUE7QUFDVE8sc0JBQUFBLElBQUFBO0FBQ0EsUUFBSUMsV0FBV0MsR0FBQUEsRUFBQUEsQ0FBZixVQUFlQSxDQUFmO0FBQ0FELGFBQUFBLFVBQUFBLENBQUFBLFdBQUFBLEVBQUFBLFNBQUFBLENBQTJDRixJQUEzQ0UsSUFBQUEsRUFBcUQsT0FBUztBQUM1RCxVQUFBLEdBQUEsRUFBUyxNQUFBLEdBQUE7QUFDVEMsU0FBQUEsS0FBQUE7QUFDQUwsVUFBQUEsTUFBQUEsQ0FBQUEsR0FBQUE7QUFDQUMsY0FBQUEsR0FBQUEsQ0FBQUEsdUJBQUFBO0FBSkZHLEtBQUFBO0FBSkZSLEdBQUFBO0FBRkZILENBQUFBOztBQWVBQSxJQUFBQSxNQUFBQSxDQUFBQSxJQUFBQSxFQUFpQixNQUFPUSxRQUFBQSxHQUFBQSxDQUFhLHNCQUFyQ1IsSUFBQUEsR0FBd0JRLENBQXhCUiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudDtcbmNvbnN0IHBvcnQgPSAzMDMwO1xuY29uc3QgdXJsID0gXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L1wiO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSlcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcblxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSk7XG4gIHJlcy5zdGF0dXMoMjAwKTtcbn0pXG5cbmFwcC5wb3N0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICBNb25nb0NsaWVudC5jb25uZWN0KHVybCwgKGVyciwgZGIpID0+IHtcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgdXNlTmV3VXJsUGFyc2VyID0gdHJ1ZTtcbiAgICB2YXIgcHVyY2hhc2UgPSBkYi5kYigncHVyY2hhc2UnKTtcbiAgICBwdXJjaGFzZS5jb2xsZWN0aW9uKCdwdXJjaGFzZXMnKS5pbnNlcnRPbmUocmVxLmJvZHksIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgIGRiLmNsb3NlKCk7XG4gICAgICByZXMuc3RhdHVzKDIwMSk7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IGluc2VydGVkJyk7XG4gICAgfSlcbiAgfSlcbn0pXG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gIGNvbnNvbGUubG9nKGBQb3J0IGlzIHJ1bm5pbmcgb24gJHtwb3J0fSFgKSkiXX0=

fetch('http://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=258260088941baa1f1db1fc0fd59259c&units=metric')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error:', err);
  });

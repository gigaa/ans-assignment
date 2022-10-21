var fs = require('fs');

var myOptions = [
{
    id:1,
    name: 'giga',
    email: 'giga@gmail.com',
    address: 'ny',
    phone: '321321313'
},
{
    id:2,
    name: 'jim',
    email: 'jim@gmail.com',
    address: 'ny1',
    phone: '4324242423'
},
{
    id:3,
    name: 'jaims',
    email: 'jaims@gmail.com',
    address: 'ny2',
    phone: '312321312'
},
];

var data = JSON.stringify(myOptions);

fs.writeFile('./data.json', data, function (err) {
  if (err) {
    console.log('There has been an error saving your configuration data.');
    console.log(err.message);
    return;
  }
  console.log('User is added successfully.')
});
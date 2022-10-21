var fs = require('fs');

var data = fs.readFileSync('./data.json');

function writeDataFile (res,text) {
    fs.writeFile('./data.json', res, function (err) {
        if (err) {
          console.log('There has been an error saving your configuration data.');
          console.log(err.message);
          return;
        }
        console.log(`User is ${text} successfully.`)
  });
}

var json = JSON.parse(data)
console.dir('showAllUsers');
console.log(json);
// // add User
let id =json.length+1;
console.log(json[json.length]);
json.push( {id,name:'new',email:'new',address:'new',phone:'new'})
var jsonData = JSON.stringify(json);
writeDataFile(jsonData, 'added')

// update user
function updateJson (arr,id,body) {
    arr[id-1]=body 
    return arr
}
let bodyID=1;
let body={id:bodyID,name:'s2',email:'s2',address:'s2',phone:'s2'}
let updateResult = JSON.stringify(updateJson(json,bodyID,body))
// console.log('updateResult',updateResult);
// +++++++++++++++ Uncomment Next Line +++++++++++++++++
// writeDataFile(updateResult, 'Updated')

// delete user
function deleteJson (arr,id) {
    let tempItem=[];
    arr.map((item, index) => {
        if (item.id !=id) {
            tempItem.push(item)
            // console.log(tempItem);
        }
    })
    return tempItem
}

let deleteResult = JSON.stringify(deleteJson(json,3))
// console.log('deleteResult',deleteResult);
// +++++++++++++++ Uncomment Next Line +++++++++++++++++
// writeDataFile(deleteResult, 'Deleted')



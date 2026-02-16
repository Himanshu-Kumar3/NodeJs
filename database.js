const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myDatabase';


async function main(){

  await client.connect();
  console.log('Connection successful')
  const db = client.db(dbName);
  const collection = db.collection('Users')
  const data = {
    'fName':'Manish',
    'lName':'Kumar',
    'city':"Petarwar"
  }
  // To Insert multiple data
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted Result : " , insertResult)

  // insert single data
  //  const insertResult = await collection.insertOne(data);
  // console.log("Inserted Result : " , insertResult)

 

  // READ something from database

  // const findResult = await collection.find({}).toArray()
  // findResult.map((res)=> console.log(res))


  // to count the documents 
  const countResult  = await collection.countDocuments({})
  console.log(countResult);

  // console.log(`Document found : ${findResult}`);
  return 'done';
}

main().then(console.log).catch(console.error).finally(()=>client.close())
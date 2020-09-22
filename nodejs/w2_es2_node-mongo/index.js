/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
const dbOper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {
  console.log('Connected correctly to server');
  const db = client.db(dbname);

  dbOper.insertDocument(db, { name: 'Vadonut', description: 'Test' }, 'dishes').then((result) => {
    console.log('Insert Document:\n', result.ops);

    return dbOper.findDocuments(db, 'dishes');
  })
    .then((docs) => {
      console.log('Found Documents:\n', docs);

      return dbOper.updateDocument(db, { name: 'Vadonut' },
        { description: 'Updated Test' }, 'dishes');
    })
    .then((result) => {
      console.log('Updated Document:\n', result.result);

      return dbOper.findDocuments(db, 'dishes');
    })
    .then((docs) => {
      console.log('Found Updated Documents:\n', docs);

      return db.dropCollection('dishes');
    })
    .then((result) => {
      console.log('Dropped Collection: ', result);

      return client.close();
    })
    .catch((err) => console.log(err));
});

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAme-haABkY4FamDDkAUtx7brTvPWRlNGg',
  authDomain: 'job-tracking-23df3.firebaseapp.com',
  projectId: 'job-tracking-23df3',
  storageBucket: 'job-tracking-23df3.appspot.com',
  messagingSenderId: '152086712667',
  appId: '1:152086712667:web:b5a9aa8cd6ba36c3ac8a7e',
  measurementId: 'G-4WF2LEFN9J',
};

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

function jobSelected() {
  let nodeValue = document.getElementById('C220060R').textContent;
  console.log(nodeValue);

  const para = document.createElement('p');
  const node = document.createTextNode('test');

  para.appendChild(node);
  document.getElementById('Current Jobs').appendChild(para);
}

const snapshot = db.collection('Jobs').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});

function fizzbuzz() {
  let counter = 1;
  do {
    if (counter % 15) console.log('FizzBuzz');
    else if (counter % 5) console.log('Buzz');
    else if (counter % 3) console.log('Fizz');
    else console.log(counter);

    counter++;
  } while (counter <= 100);
}

fizzbuzz();

// function hello(name) {
//   console.log(`Hello ${name}`); // eslint-disable-line
// }
// hello('JS World Hi');

import express from 'express';
import canonize from './canonize';

const app = express();

app.get('/', (req, res) => {
	// console.log(req.query);
	const username = canonize(req.query.url);
	res.json({
		url: req.query.url,
		username,
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



// const array = [
// 'https://telegram.me/Rambler68',
// 'https://vk.com/Rambler68'
// ];

// array.forEach(url =>{
// 	const username = canonize(url);
// 	console.log(username);
// }) 

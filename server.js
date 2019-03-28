import express from 'express'; 
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import path from 'path';
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(__dirname + '/src'));
//app.use(express.static(__dirname + '/static/images'));


app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname + '/src/views/home.html'));
});

app.get('/signIn', function(req, res) {

  res.sendFile(path.join(__dirname + '/src/views/signin.html'));
});

app.get('/Register', function(req, res) {

  res.sendFile(path.join(__dirname + '/src/views/register.html'));
});

app.listen(5000, () => {
  console.log('Listening');
});


/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

var data = [

  {url:'/blog/lifestyle/top-habits-of-morning-people', views:'1455',time: '2m:25s', deltaUp: true},
{url:'/blog/lifestyle/7-productivity-hacks', views:'1422',time: '2m:14s', deltaUp: true},
{url:'blog/fitness/cardio-on-the-go', views:'1378',time: '2m:23s', deltaUp: true},
{url:'/blog/lifestyle/5-strategies-for-becoming-more-mindful', views:'1144',time: '2m:2s', deltaUp: true},
{url:'/blog/guest-post/insta-influencers-you-should-follow', views:'1047',time: '1m:16s', deltaUp: true},
{url:'/blog/business/3-management-mistakes-to-avoid', views:'1002',time: '0m:34s', deltaUp: false},
{url:'/blog/business/social-media-dos-and-donts', views:'997',time: '1m:5s', deltaUp: true},
{url:'/blog/lifestyle/boost-your-mood-with-these-5-steps', views:'983',time: '0m:54s', deltaUp: true},
{url:'/blog/lifestyle/this-year-keep-your-new-years-resolutions', views:'971',time: '1m:28s', deltaUp: true},
{url:'/blog/business/our-favourite-holiday-ads', views:'966',time: '1m:21s', deltaUp: false},
{url:'/blog/business/why-wont-they-answer-your-email?', views:'890',time: '1m:11s', deltaUp: true},
{url:'/blog/lifestyle/practicing-mindfullness', views:'712',time: '1m:17s', deltaUp: true},
{url:'/blog/lifestyle/habit-forming-hacks', views:'701',time: '2m:35s', deltaUp: false},
{url:'/blog/business/more-effective-meetings-in-7-steps', views:'302',time: '2m:45s', deltaUp: true},
{url:'/blog/lifestyle/fitness/the-right-protein-powder-for-you', views:'299',time: '2m:23s', deltaUp: true},
{url:'/blog/lifestyle/heres-why-minimalism-is-trending', views:'274',time: '1m:38s', deltaUp: true},
{url:'/blog/fitness/cold-weather-workouts-to-warm-you-up', views:'201',time: '1m:12s', deltaUp: true},
{url:'blog/fitness/8-ways-to-stay-active-while-recovering-from-an-injury', views:'198',time: '0m:54s', deltaUp: false}

];

/**********************
 * Example get method *
 **********************/

app.get('/site/:siteId', function(req, res) {
  // Add your code here
  res.json(data);
});

app.get('/site/:siteId/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/site/:siteId', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/site/:siteId/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/site/:siteId', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/site/:siteId/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/site/:siteId', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/site/:siteId/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});


// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

# JOURNAL SERVER
A Express Server for the Journal App

[![journal.png](https://i.postimg.cc/y6Tkv6ym/journal.png)](https://postimg.cc/xqcfd278)

## Start Capturing the story of your life 

#### We all have a past, Do we remember the most of it ? No , So here's a tool to write down what happened today, I'm sure you'll enjoy reading all the memories down the lane , 
when you're at you're older age

<h2>Installation </h2>

Use the package manager [npm](https://www.npmjs.com/) to install Journal Server.
Setup the project and install the packages by running: 
```bash
npm install
```
 Run the below command to start the server
```bash
npm run dev
```

<h2> API </h2>
<h4> Users </h4>
<ul>
  <li> <b>POST</b> /api/users/signup </li>
  <li> <b>POST</b>  /api/users/signin  </li>
</ul>

<h4> Posts </h4>
<ul>
  <li> <b>GET</b> /api/posts </li>
  <li> <b>POST</b> /api/posts </li>
  <li> <b>PUT</b> /api/posts/:postId </li>
  <li> <b>DELETE</b> /api/posts/:postId </li>
</ul>

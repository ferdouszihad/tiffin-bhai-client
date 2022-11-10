import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5 mb-3">
      <h2 class="py-3 m-2 rounded-2 bg-warning text-center">Our Blogs</h2>
      <div className="blogs-container">
        <article class="my-4 mb-5 border border-warning p-3 rounded-bottom">
          <h2>Difference between SQL and NoSQL</h2>
          <hr />
          <p>
            There are a few major Differences between the SQL and NoSQL
            database. <br />
            SQL databases are relational and it use structured query language
            and have a predefined schema but NoSQL databases are non-relational
            and it have dynamic schemas for unstructured data. SQL stores data
            as a form of table . but NoSQL database create JSON data which
            called as collection
          </p>
        </article>
        <article class="my-4 mb-5 border border-warning p-3 rounded-2">
          <h2>What is JWT, and how does it work?</h2>
          <hr />
          <p>
            JWT, or JSON Web Token, is an open standard set of token to share
            security information or authorization/authentication requests
            between a client and a server. Each JWT contains encoded JSON
            objects.
          </p>
          <p>
            when a user logs in, the server creates a JWT token signed using the
            user detail entered and a secret key. Afterward, the token will be
            sent to the client to be kept in a cookie or local storage, thus
            handing user state maintenance to the client. After signing in
            successfully, in any request to protected endpoints, the token must
            be attached to the Authorization request header following the format
            of “Authorization: Bearer ". When the server handles the requests to
            protected endpoints, it will verify the token to check if it is
            valid. If that is the case, access is given to the user. Otherwise,
            an error occurs.
          </p>
        </article>
        <article class="my-4 mb-5 border border-warning p-3 rounded-2">
          <h2>What is the difference between javascript and NodeJS?</h2>
          <hr />
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
          <p>
            Javascript is mainly used for any client side activity for the web
            application, for example refreshing the page in a specific interval,
            possible attribute validation or provide any dynamic changes in web
            app pages without refreshing that particular web page.
            <br />
            <br />
            Node.js makes the Javascript more powerful and add many great
            features to it. Node.js is written in the C++, and provides V8
            engine base that helps developers to run the written program of
            javascript in any browser environment. So that It allows you to
            create server-side applications and tools using JavaScript.
          </p>
        </article>
        <article class="my-4 mb-5 border border-warning p-3 rounded-2">
          <h2>How does NodeJS handle multiple requests at the same time?</h2>
          <hr />
          <p>
            NodeJS Web Server maintains a limited Thread Pool to provide
            services to client requests. Multiple clients make multiple requests
            to the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded. In
            other words, EventLoop is the listener for the EventQueue. So, we
            have an event queue where the requests are being placed and we have
            an event loop listening to these requests in the event queue.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;

import { useEffect } from "react";


const Blog = () => {

    useEffect(() => {
        document.title = "ToyWarriors | Blogs";
    }, []);
    return (
        <div className='mt-12'>
        <h3 className="text-2xl font-bold">Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
</h3>
    <h3 className="text-2xl font-bold">Answer: Access tokens are used in token-based authentication to allow an application to access an API. <br />
    A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login.
    <br />
    A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.
    <br />
    We can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
    </h3>
    <h3 className="text-2xl font-bold">Question 2: Compare SQL and NoSQL databases?</h3>
    <h4 className="text-2xl font-bold">Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
</h4>
    <h3 className="text-2xl font-bold">Question 3: What is express js? What is Nest JS?</h3>
    <h4 className="text-2xl font-bold">Answer:  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br />
    Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
    </h4>
    <h3 className="text-2xl font-bold">Question 4: What is MongoDB aggregate and how does it work?</h3>
    <h4 className="text-2xl font-bold">Answer:  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
    
    </h4>


    </div>
    );
};

export default Blog;
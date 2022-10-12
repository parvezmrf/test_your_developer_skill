import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='qna-body' >
                <h2>Purpose of react Router </h2>
                <hr />
                <p>
                    React Router is a state container for the current location, or URL. It keeps track of the location and renders different "Route" s as it changes, and it also gives you tools to update the location using "Link" s and the history API. Given the fact that managing this piece of state is the router's main responsibility, you can imagine that a new primitive that lets us compose state is going to enable a few things we couldn't do before!
                </p>
            </div>
            <div className='qna-body' >
                <h2>How does context API works? </h2> <hr />
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className='qna-body' >
                <h2>What is useRef ? </h2> <hr />
                <p>useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.
                </p>
            </div>
        </div>
    );
};

export default Blog;
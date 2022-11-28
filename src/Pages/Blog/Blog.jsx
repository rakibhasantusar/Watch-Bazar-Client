import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className='mb-3'>
                <div className="dark:bg-gray-900">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center  md:py-12 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-orange-500">Blog Page</h1>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1440 200"><path fill="#111827" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,85.3C672,75,768,117,864,117.3C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>
            <section className='-mt-10'>
                <div className=" dark:dark:text-gray-100 m-5 mt-10">
                    <div className="container mt-2 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold text-orange-500">1. What are the different ways to manage a state in a React application?</h2>
                            <p className="mt-3">
                                1. Local state is most often managed in React using the useState hook.
                                <br />
                                2. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                                <br />
                                3. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                                <br />
                                4. URL state is often missing as a category of state, but it is an important one.
                                In many cases, a lot of major parts of our application rely upon accessing URL state.
                            </p>
                        </div>
                    </div>
                    <div className="container mt-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold text-orange-500">2. How does prototypical inheritance work?</h2>
                            <p className="mt-3">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. </p>
                        </div>
                    </div>
                    <div className="container mt-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold text-orange-500">3.What is a unit test? Why should we write unit tests?</h2>
                            <p className="mt-3">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                                <br />
                                <br />
                                ■ Advantages to unit testing include:
                                <br />
                                1.The earlier a problem is identified, the fewer compound errors occur.
                                <br />
                                2.Costs of fixing a problem early can quickly outweigh the cost of fixing it later.
                                <br />
                                3.Debugging processes are made easier.
                                <br />
                                4.Developers can quickly make changes to the code base.
                                <br />
                                5.Developers can also re-use code, migrating it to new projects.
                                <br />
                                <br />
                                ■ Disadvantages include:
                                <br />
                                1.Tests will not uncover every bug.
                                <br />
                                2.Unit tests only test sets of data and its functionality—it will not catch errors in integration.
                                <br />
                                3.More lines of test code may need to be written to test one line of code—creating a potential time investment.
                            </p>
                        </div>
                    </div>
                    <div className="container my-10 mb-24 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold text-orange-500">4.React vs. Angular vs. Vue?</h2>
                            <p className="mt-3">
                                <span className='text-xl font-semibold'>Angular:</span>
                                <br />
                                Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                                <br /><br />
                                <span className='text-xl font-semibold'>React:</span>
                                <br />
                                React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                                <br /><br />
                                <span className='text-xl font-semibold'>Vue:</span>
                                <br />
                                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
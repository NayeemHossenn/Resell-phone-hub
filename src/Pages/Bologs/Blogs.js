import React from "react";

const Blogs = () => {
  return (
    <div className=" p-5 rounded">
      <div className="bg-sky-100 p-4  rounded">
        <h3 className="text-4xl mb-4 ">
          {" "}
          1. What are the different ways to manage a state in a React
          application?{" "}
        </h3>
        <p className="text-xl">
          There are a lot of different kinds of state in React to manage
          application <p className="font-bold">Local state –</p> Local state is
          data we manage in one or another component.Local state is most often
          managed in React using the useState hook{" "}
          <p className="font-bold">Global state –</p> Global state is data we
          manage across multiple components. Lifted State The Fourth option is
          to define the state in the parent component. Often, the same state is
          used across multiple components. In those cases, it is useful to lift
          the state to a common parent.{" "}
          <p className="font-bold">Lifting state –</p> is a two‑step process.
          First, we declare the state in a common parent component, and then we
          pass the state down to child components via props Global state is
          necessary when we want to get and update data anywhere in our app, or
          in multiple components at least. A common example of global state is
          authenticated user state. <p className="font-bold">Server state –</p>{" "}
          Data that comes from an external server that must be integrated with
          our UI state. Server state is a simple concept, but can be hard to
          manage alongside all of our local and global UI state.{" "}
          <p className="font-bold">Url state –</p>
          Data that exists on our URLs, including the pathname and query
          parameters. URL state is often missing as a category of state, but it
          is an important one. In many cases, a lot of major parts of our
          application rely upon accessing URL state
        </p>
      </div>
      <div className="mt-3 bg-sky-100 p-4  rounded">
        <h3 className="text-4xl mb-3">
          {" "}
          2. How does prototypical inheritance work?{" "}
        </h3>
        <p className="text-xl">
          prototypical inheritance refers to the ability to access object
          properties from another object. We use a JavaScript prototype to add
          new properties and methods to an existing object constructor. We can
          then essentially tell our JS code to inherit properties from a
          prototype. Prototypical inheritance allows us to reuse the properties
          or methods from one JavaScript object to another through a reference
          pointer function
        </p>
      </div>
      <div className="mt-3 bg-sky-100 p-4  rounded">
        <h3 className="text-4xl mb-3">
          {" "}
          3. What is a unit test? Why should we write unit tests?{" "}
        </h3>
        <p className="text-xl">
          Unit testing is a software testing method where “units”—the individual
          components of software—are tested <br />
          We write unit tests for their code to make sure that the code works
          correctly. This helps to detect and protect against bugs in the
          future.
        </p>
      </div>
      <div className="mt-3 bg-sky-100 p-4  rounded">
        <h3 className="text-4xl mb-3">4. React vs. Angular vs. Vue? </h3>
        <p className="text-xl">
          <p className="text-xl font-bold">React-</p>A JavaScript library for
          building user interfaces.React Elements are the smallest building
          blocks of React apps. Code Reusability- it allows developers to reuse
          blocks of code for a simple function. Ease-of-use - React, though
          tougher than Vue, has a less steep learning curve than Angular JS.
          Customizable - The crucial difference between the library and
          framework is about control. This is where React is ahead of Angular-
          it is highly customizable. You are in control and you incorporate the
          parts of the library you need, unlike Angular, which does not allow
          much modification.React JS apps are created as a series of components,
          with functionalities being passed from parent component to child
          component in the form of arguments. This is called one-way data
          binding or the unidirectional flow of data. Because of this one
          characteristic, it is very convenient to make changes in React apps.
          Whatever change you make in the child components does not reflect in
          th
        </p>
        <p className="text-xl">
          <p className="text-xl font-bold">Angular-</p>Angular is a robust
          framework that has all the needed functionalities packed into its
          official library. And since it is from Google, you can be assured of
          the quality of code and high-end security features. Web development
          with Angular JS requires fewer imports of third-party libraries,
          significantly reducing app development costs. In Angular, the user
          interface is written in simple HTML and the functionality is
          implemented via Javascript. Thus, developers needn’t bother themselves
          with program flows but just supplement the UI with functionalities.
        </p>
        <p className="text-xl">
          <p className="text-xl font-bold">Vue-</p>Vue is best utilized in cases
          of lightweight yet high performance, intuitive apps as the
          applications are quickly ready for the market without compromising on
          the performance or functionalities. Let us take a quick look at what
          makes Vue JS a lucrative choice for businesses.Vue JS is more oriented
          to novice developers, while React requires in-depth knowledge of
          JavaScript. React uses a virtual DOM (copy of the actual DOM) to
          interact with HTML files, but every element is represented as a
          JavaScript object. Vue has two-way binding and uses a virtual DOM.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

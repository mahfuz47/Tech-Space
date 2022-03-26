import React from "react";
import "./Answers.css";
const Answers = () => {
  return (
    <div className="answers-section">
      <h1>Answers</h1>
      <div className="answers-box">
        <div className="card">
          <h3>Q: How Reacts Works</h3>
          <p>
            Ans:{" "}
            <b>React is a Javascript Library for building user interfaces.</b>
            It's declaraive views make codes more predictable and earier to
            debug. Component based work makes our tasks less difficult. It
            creates virtual DOM for run and read the codes fast. React makes us
            to believe that we can write HTML elements on js file. JSX,
            Javascript XML's pretends as a template language but it contains the
            full efficiency of <b>Javascript</b>. However, for the first time as
            a developer for anyone, It will be a confusing topic but at the time
            of being practiced regularly, You can feel it enjoyable.
          </p>
        </div>
        <div className="card">
          <h3>Q: What is the difference between props and state?</h3>
          <p>
            Ans:{" "}
            <b>
              The mejor defference between state and props is state is an
              internal function and controlled by component itself but Props is
              external and controlled by whatever renders the component.
            </b>
            State is used for update component's data and make the data dynamic
            everytime when it will take an update. Props are just read-only
            component. It allows to pass data from one component to another.
            Props is immutable though State is mutable. State cannot be accessed
            by child component but Props can be accessed. State cannot make
            components reusable but Props can make components reusable.
          </p>
        </div>
        <div className="card">
          <h3>Q: How useState Works?</h3>
          <p>
            Ans:
            <b>
              {" "}
              UseState is a Hook that allows you to have state variables in
              function components.
            </b>
            useState hook is allows to set an functions initial value and keeps
            it up to date as the date will be updated. It needs two elements.
            The first element is the initial state and the second one is a
            function that is used for updating the state. and the second element
            as a function it will the value of array will be set on that
            variable and the function will work for changing the value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answers;

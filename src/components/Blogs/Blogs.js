import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="border border-info m-5 p-2 rounded">
        <h3 className="fw-bold">1. What is the purpose of react router?</h3>
        <p>
          React Router is a standard library for routing in React. It enables the navigation among
          views of various components in a React Application, allows changing the browser URL, and
          keeps the UI in sync with the URL.
        </p>
      </div>
      <div className="border border-info m-5 p-2 rounded">
        <h3 className="fw-bold">2. How does context API work?</h3>
        <p>
          React.createContext() is all you need. It returns a consumer and a provider. Provider is a
          component that as it's names suggests provides the state to its children. It will hold the
          "store" and be the parent of all the components that might need that store. Consumer as it
          so happens is a component that consumes and uses the state. More information can be found
          on React's documentation page.
        </p>
      </div>
      <div className="border border-info m-5 p-2 rounded">
        <h3 className="fw-bold">3. What is useRef?</h3>
        <p>
          The useRef Hook allows you to persist values between renders. It can be used to store a
          mutable value that does not cause a re-render when updated. It can be used to access a DOM
          element directly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

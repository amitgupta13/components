import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        Are You Sure You Want To Do This.
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          time="today at 4 pm"
          comment="wala"
          image={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          time="today at 5 pm"
          comment="bhais"
          image={faker.image.city()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          time="today at 6 pm"
          comment="anda"
          image={faker.image.sports()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

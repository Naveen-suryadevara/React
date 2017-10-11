import React from "react";

function Mailbox(props) {
  const unopenedMails = props.unopenedMails;
  return (
    <div>
      <h1> Hey </h1>{" "}
      {unopenedMails.length > 0 && (
        <h2>
          {" "}
          You have {unopenedMails.length}
          unopened mails.{" "}
        </h2>
      )}{" "}
    </div>
  );
}

const mails = ["React", "Re: React", "Re:Re: React", "Re:Re:Re: React"];
ReactDOM.render(
  <Mailbox unopenedMails={mails} />,
  document.getElementById("root")
);

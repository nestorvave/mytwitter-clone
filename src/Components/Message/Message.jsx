/**
 * Dependencies
 */
import React from "react";


const Message = ({
  header = "",
  title = "",
  image = "",
  p = "",
  cancel = null,
  confirm = null,
}) => {

  return (
    <section className="message ">
      <p className="title">{header}</p>
      <span className="green"></span>
      <span className="orange"></span>
      <span className="red" onClick={cancel} ></span>
      <div className="warning">
        <div className="msg">
          <h1>{title}</h1>
          <p>{p}</p>

          {
            cancel !== null && confirm !== null && (
              <div className="msg__btns">
                <button className="button--primary" onClick={cancel}>
                  Cancel
                </button>
                <button className="button--primary" onClick={confirm}>
                  Confirm
                </button>
              </div>
            )
          }
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Message;

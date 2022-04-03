import React, { useEffect } from "react";
// import { DataContext } from "../../context/DataProvider";
// import "./msgWarning.scss";

const Message = ({ title="", image="", p="", cancel=null, confirm=null }) => {

//   const { setEffect, effect } = useContext(DataContext);
//   useEffect(() => {
//     setTimeout(() => setEffect(false), 5000);
//   }, [effect, setEffect]);

  return (
    <section className="message ">
      <p className="title">Your message</p>
      <span className="green"></span>
      <span className="orange"></span>
      <span className="red"></span>
      <div className="warning">
        <div className="msg">
          <h1>{title}</h1>
          <p>{p}</p>

          {
            cancel !== null && confirm !== null &&
            <div className="msg__btns" >
              <button 
                className="button--primary"
                onClick={cancel}
              >
                Cancel
              </button>
              <button 
                className="button--primary"
                onClick={confirm}
              >
                Confirm
              </button>

            </div>
          }
        </div>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Message
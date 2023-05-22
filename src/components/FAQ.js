import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq">
      <h1 className="faq__heading">Frequently Asked Questions</h1>
      <div className="faq__qna">
        <h3 className="faqHeading">What can I do with yamak.ai?</h3>
        <img className="faqQNA__img" src="./images/Ellipse.png" alt="" />
      </div>
      <p className="faqpara">
        You can generate ads, blogs, emails, etc. in less than 10 sec with mere
        description.
      </p>
      <hr className="hrline" />
      <div className="faq__qna">
        <h3 className="faqHeading">Is there a forever-free plan available?</h3>
        <img className="faqQNA__img" src="./images/Ellipse.png" alt="" />
      </div>
      <hr className="hrline" />
      <div className="faq__qna">
        <h3 className="faqHeading">How many languages does Yamak supports?</h3>
        <img className="faqQNA__img" src="./images/Ellipse.png" alt="" />
      </div>
      <hr className="hrline" />
      <div className="faq__qna">
        <h3 className="faqHeading">Does APIs exist for developers?</h3>
        <img className="faqQNA__img" src="./images/Ellipse.png" alt="" />
      </div>
      <hr className="hrline" />
    </div>
  );
}

export default FAQ;

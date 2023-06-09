import React from "react";

const planContents = [
  {
    header: "Free",
    price: 19,
    features: [
      "Integration",
      "In-App Support",
      "75 Credits",
      "20 Plaglarism Checks/mo",
    ],
    buttonLabel: "Start Writing for free",
    outline: true,
  },
  {
    header: "Pro",
    price: 19,
    features: [
      "Integration",
      "In-App Support",
      "75 Credits",
      "20 Plaglarism Checks/mo",
    ],
    buttonLabel: "Start Writing for free",
    outline: false,
  },
  {
    header: "Enterprise",
    price: 19,
    features: [
      "Integration",
      "In-App Support",
      "75 Credits",
      "20 Plaglarism Checks/mo",
    ],
    buttonLabel: "Start Writing for free",
    outline: false,
  },
];

const Plan = (props) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{props.header}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${props.price}`}
          <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {props.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <button
          className={`btn btn-lg btn-block ${
            props.outline ? "btn-outline-primary" : "btn-primary"
          }`}
          type="button"
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};

const Plans = () => {
  const plans = planContents.map((obj, i) => {
    return (
      <Plan
        key={obj.header}
        header={obj.header}
        price={obj.price}
        features={obj.features}
        buttonLabel={obj.buttonLabel}
        outline={obj.outline}
      />
    );
  });

  return <div className="card-deck mb-3 text-center">{plans}</div>;
};

export default Plans;

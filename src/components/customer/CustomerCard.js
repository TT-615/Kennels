import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-customerId">
            {customer.id}
          </span></h3>
          <p>Address: {customer.id}</p>
        </div>
      </div>
    );
  }

  ///I need to fix lines 11-14
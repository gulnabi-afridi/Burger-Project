import React from "react";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import "./checkoutForm.css";
import Spanner from "../../Spinner/Spinner";
import axios from "../../../axios-orders";
import { nominalTypeHack } from "prop-types";

const CheckoutForm = (props) => {
  //   states
  const [name, set_Name] = useState("");
  const [phNo, set_PhNo] = useState("");
  const [Address, set_Address] = useState("");
  const [Postal_Code, set_Postal_Code] = useState("");
  const [Street_No, set_Street_No] = useState("");
  const [Show_Spanner, Set_Show_Spanner] = useState(false);

  // States for valadations
  const [Valid_Name, Set_Valid_Name] = useState(false);
  const [Valid_phNo, Set_Valid_phNo] = useState(false);
  const [Valid_Address, Set_Valid_Address] = useState(false);
  const [Valid_Postal_Code, Set_Valid_Postal_Code] = useState(false);
  const [Valid_Street_No, Set_Valid_Street_No] = useState(false);
  const [Valid_Show_Spanner, Set_Valid_Show_Spanner] = useState(false);
  const [AllFields, Set_All_Fieds] = useState(false);

  const form_Data = {
    ingredient: props.ingredient,
    customer: {
      name: name,
      PhNo: phNo,
      Address: {
        Address: Address,
        postalCode: Postal_Code,
        StreetNo: Street_No,
      },
    },
  };
  function orderHandler(event) {
    event.preventDefault();
    // Checking valadations
    console.log("enter");
    if (
      name.length === 0 &&
      phNo.length === 0 &&
      Address.length === 0 &&
      Postal_Code.length === 0 &&
      Street_No.length === 0
    ) {
      return Set_All_Fieds(true);
    }

    if (name.length === 0) return Set_Valid_Name(true);
    if (phNo.length === 0) return Set_Valid_phNo(true);
    if (Address.length === 0) return Set_Valid_Address(true);
    if (Postal_Code.length === 0) return Set_Valid_Postal_Code(true);
    if (Street_No.length === 0) return Set_Valid_Street_No(true);

    Set_Show_Spanner(true);
    // http request to server
    axios.post("/orders.json", form_Data).then(
      (response) => {
        Set_Show_Spanner(false);
        props.history.push("/");
        // setdisableMoodal(false);
      },
      (error) => {
        Set_Show_Spanner(false);
      }
    );
  }

  function Name_Change_Han(event) {
    set_Name(event.target.value);
    Set_Valid_Name(false);
    Set_All_Fieds(false);
  }

  function Ph_Change_Han(event) {
    set_PhNo(event.target.value);
    Set_Valid_phNo(false);
    Set_All_Fieds(false);
  }

  function Address_Change_Han(event) {
    set_Address(event.target.value);
    Set_Valid_Address(false);
    Set_All_Fieds(false);
  }

  function Postal_Code_Han(event) {
    set_Postal_Code(event.target.value);
    Set_Valid_Postal_Code(false);
    Set_All_Fieds(false);
  }

  function Street_No_Change_Han(event) {
    set_Street_No(event.target.value);
    Set_Valid_Street_No(false);
    Set_All_Fieds(false);
  }

  let form = (
    <form className="form">
      <input
        name="name"
        value={name}
        onChange={(event) => Name_Change_Han(event)}
        placeholder="Enter name"
      ></input>
      {Valid_Name && (
        <div
          className="valadationText"
          style={{
            color: "red",
            width: "400px",
            fontSize: "12px",
            marginTop: "-9px",
          }}
        >
          required *
        </div>
      )}
      <input
        name="address"
        value={phNo}
        onChange={(event) => Ph_Change_Han(event)}
        placeholder="Enter Your mobile number"
      ></input>
      {Valid_phNo && (
        <div
          className="valadationText"
          style={{
            color: "red",
            width: "400px",
            fontSize: "12px",
            marginTop: "-9px",
          }}
        >
          required *
        </div>
      )}
      <input
        name="postalCode"
        value={Address}
        onChange={(event) => Address_Change_Han(event)}
        placeholder="Enter your Address"
      ></input>
      {Valid_Address && (
        <div
          className="valadationText"
          style={{
            color: "red",
            width: "400px",
            fontSize: "12px",
            marginTop: "-9px",
          }}
        >
          required *
        </div>
      )}
      <input
        name="streetNo"
        value={Postal_Code}
        onChange={(event) => Postal_Code_Han(event)}
        placeholder="Enter postal code"
      ></input>
      {Valid_Postal_Code && (
        <div
          className="valadationText"
          style={{
            color: "red",
            width: "400px",
            fontSize: "12px",
            marginTop: "-9px",
          }}
        >
          required *
        </div>
      )}
      <input
        name="street no"
        value={Street_No}
        onChange={(event) => Street_No_Change_Han(event)}
        placeholder="Enter Street number"
      ></input>
      {Valid_Street_No && (
        <div
          className="valadationText"
          style={{
            color: "red",
            width: "400px",
            fontSize: "12px",
            marginTop: "-9px",
          }}
        >
          required *
        </div>
      )}

      {AllFields && (
        <div
          className="valadationText"
          style={{
            color: "red",
            width: "400px",
            fontSize: "12px",
            marginTop: "-9px",
          }}
        >
          Fill all the fields
        </div>
      )}
      <Button
        fontSize={"25px"}
        btnType={"Continoue"}
        padding={"8px"}
        paddingL={"28px"}
        radius={"6px"}
        clicked={orderHandler}
      >
        Order
      </Button>
    </form>
  );
  if (Show_Spanner) {
    form = <Spanner></Spanner>;
  }
  return <div className="Checkoutform">{form}</div>;
};
export default CheckoutForm;

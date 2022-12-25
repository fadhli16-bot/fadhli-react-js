import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FuntionComponent from "./Pembahasan/FunctionComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="M Fadhli Rabani" />
        <FuntionComponent nama="Rabani" />
      </div>
    );
  }
}

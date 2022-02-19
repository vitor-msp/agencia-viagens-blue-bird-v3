import React from "react";
import { FormContact } from "../components/forms/FormContact";

export function ContactPage() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Contato</strong>
      </h1>
      <FormContact />
    </div>
  );
}

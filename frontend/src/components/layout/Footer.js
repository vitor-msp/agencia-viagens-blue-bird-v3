import React from "react";

export function Footer() {
  return (
    <footer className="row m-0 bg-primary text-light d-flex flex-column text-center pt-3">
      <span>&copy; {new Date().getFullYear()} - BlueBird Viagens</span>
      <span>Recode Pro - 2021</span>
      <span>Projeto Agência de Viagens - Módulo 4</span>
      <span>Desenvolvedor: Vítor Mateus Santos Parreiras</span>
      <address>
        <span>Contato:</span>{" "}
        <a className="text-light" href="mailto:vitor7jan@gmail.com">
          vitor7jan@gmail.com
        </a>
      </address>
    </footer>
  );
}

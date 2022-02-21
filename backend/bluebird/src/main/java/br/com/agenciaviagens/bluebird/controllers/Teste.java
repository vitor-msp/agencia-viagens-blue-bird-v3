package br.com.agenciaviagens.bluebird.controllers;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
/*
@EnableWebSecurity
@EnableAuthorizationServer
@EnableResourceServer
*/
@RestController
public class Teste {

	@GetMapping("/teste")
	public String teste() {
		return "teste bem sucedido";
	}
}

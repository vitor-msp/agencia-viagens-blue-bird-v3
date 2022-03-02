package br.com.agenciaviagens.bluebird.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Client;
import br.com.agenciaviagens.bluebird.models.repositories.ClientRepository;
import br.com.agenciaviagens.bluebird.payload.request.ClientRequest;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;
import br.com.agenciaviagens.bluebird.security.jwt.JwtUtils;

@RestController
@RequestMapping("/client")
public class ClientController{
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	public boolean validatePassword(Client client, String password){
		
			return encoder.matches(password, client.getPassword());
	}
	
	@PutMapping
	public ResponseEntity<?> putClient(
			@RequestHeader("Authorization") String token,
			@Valid @RequestBody ClientRequest clientRequest){
		
		token = token.substring(7, token.length());
		String clientEmail = jwtUtils.getUserNameFromJwtToken(token);
		
		Optional<Client> clientOpt = clientRepository.findByEmail(clientEmail);
		if(clientOpt.isEmpty()) {
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro: Cliente não encontrado!"));
		}
		
		Client client = clientOpt.get();
		if(validatePassword(client, clientRequest.getPassword())) {
		
			client.setName(clientRequest.getName());
			client.setRg(clientRequest.getRg());
			client.setCpf(clientRequest.getCpf());
			client.setBirthDate(clientRequest.getBirthDate());

		}else {			
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro: Cliente não autorizado a atualizar os dados!"));
		}
		
		try {
			 clientRepository.save(client);
			return ResponseEntity.ok(new MessageResponse("Dados atualizados com sucesso!"));
		
		} catch (Exception e) {
			System.out.println(e);
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro na atualização dos dados!"));
		}		
	}
}
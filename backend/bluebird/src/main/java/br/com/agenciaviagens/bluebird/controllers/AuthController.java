package br.com.agenciaviagens.bluebird.controllers;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Client;
import br.com.agenciaviagens.bluebird.models.repositories.ClientRepository;
import br.com.agenciaviagens.bluebird.payload.request.LoginRequest;
import br.com.agenciaviagens.bluebird.payload.request.RegisterRequest;
import br.com.agenciaviagens.bluebird.payload.response.JwtResponse;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;
import br.com.agenciaviagens.bluebird.security.jwt.JwtUtils;
import br.com.agenciaviagens.bluebird.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	ClientRepository clientRepository;

	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
		
		try {
			
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							loginRequest.getEmail(), loginRequest.getPassword()));;
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
			
			JwtResponse clientResponse = new JwtResponse(
					userDetails.getUsername(), jwt, "Bearer");
			
			return ResponseEntity.ok(clientResponse);
			
		} catch (BadCredentialsException e) {

			return ResponseEntity.badRequest().body(new MessageResponse("emailOuSenhaIncorretos"));
		
		} catch (Exception e) {
			
			return ResponseEntity.internalServerError().body(new MessageResponse("Erro ao efetuar o login!"));
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerClient(@Valid @RequestBody RegisterRequest registerRequest) {

		try {
			if (clientRepository.existsByEmail(registerRequest.getEmail())) {
				return ResponseEntity
						.badRequest()
						.body(new MessageResponse("emailJaEmUso"));
			}
			Client client = new Client(
					registerRequest.getName(),
					registerRequest.getRg(),
					registerRequest.getCpf(),
					registerRequest.getBirthDate(),
					registerRequest.getEmail(),
					encoder.encode(registerRequest.getPassword()));
	
			clientRepository.save(client);
			return ResponseEntity.ok(new MessageResponse("Usu??rio cadastrado com sucesso!"));
			
		} catch (Exception e) {

			return ResponseEntity.internalServerError().body(new MessageResponse("Erro ao efetuar o cadastro!"));
		}
	}
}
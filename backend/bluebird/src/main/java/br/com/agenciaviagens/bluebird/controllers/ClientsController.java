//package br.com.agenciaviagens.bluebird.controllers;
//
//import javax.validation.Valid;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import br.com.agenciaviagens.bluebird.models.entities.Client;
//import br.com.agenciaviagens.bluebird.models.repositories.ClientRepository;
//import br.com.agenciaviagens.bluebird.payload.request.SignupRequest;
//import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;
//
//@CrossOrigin(origins = "*", maxAge = 3600)
//@RestController
//@RequestMapping("/clients")
//public class ClientsController {
//	
//	@Autowired
//	AuthenticationManager authenticationManager;
//	
//	@Autowired
//	ClientRepository clientRepository;
//
//	@Autowired
//	PasswordEncoder encoder;
//
//	@PostMapping("/register")
//	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
////		if (clientRepository.existsByUsername(signUpRequest.getUsername())) {
////			return ResponseEntity
////					.badRequest()
////					.body(new MessageResponse("Error: Username is already taken!"));
////		}
//		if (clientRepository.existsByEmail(signUpRequest.getEmail())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("Error: Email is already in use!"));
//		}
//		Client client = new Client(signUpRequest.getName(),
//				signUpRequest.getRg(),
//				signUpRequest.getCpf(),
//				signUpRequest.getBirthDate(),
//				signUpRequest.getEmail(),
//				encoder.encode(signUpRequest.getPassword()));
//		clientRepository.save(client);
//		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
//	}
//}

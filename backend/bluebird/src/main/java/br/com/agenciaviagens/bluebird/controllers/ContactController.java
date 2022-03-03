package br.com.agenciaviagens.bluebird.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Contact;
import br.com.agenciaviagens.bluebird.models.repositories.ContactRepository;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/contact")
public class ContactController{

	@Autowired
	ContactRepository contactRepository;
	
	@PostMapping
	public ResponseEntity<?> postContact(@Valid @RequestBody Contact contact){
		try {
			
			contactRepository.save(contact);
			return ResponseEntity.ok(new MessageResponse("Contato efetuado com sucesso!"));

		} catch (Exception e) {

			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro ao efetuar o contato!"));
		}
	}
}

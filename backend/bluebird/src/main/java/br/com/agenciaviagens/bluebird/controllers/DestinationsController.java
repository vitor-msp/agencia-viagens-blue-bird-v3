package br.com.agenciaviagens.bluebird.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.repositories.DestinationRepository;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/destinations")
public class DestinationsController{

	@Autowired
	DestinationRepository destinationRepository;
	
	@GetMapping
	public ResponseEntity<?> getDestinations(){		
		try {

			return ResponseEntity.ok(destinationRepository.findAll());

		} catch (Exception e) {

			return ResponseEntity.internalServerError()
					.body(new MessageResponse("Erro ao obter os destinos!"));		
		}
	}
}
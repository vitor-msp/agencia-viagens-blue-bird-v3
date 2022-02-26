package br.com.agenciaviagens.bluebird.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Destination;
import br.com.agenciaviagens.bluebird.models.repositories.DestinationRepository;

@RestController
@RequestMapping("/destinations")
public class DestinationsController{

	@Autowired
	DestinationRepository destinationRepository;
	
	@GetMapping
	public ResponseEntity<Iterable<Destination>> getDestinations(){
		return ResponseEntity.ok(destinationRepository.findAll());
	}
//	@GetMapping
//	public ResponseEntity<Page<Destination>> getDestinations(){
//		Pageable page = (Pageable) PageRequest.of(0, 100);
//		return ResponseEntity.ok(destinationRepository.findAll(page));
//	}
}
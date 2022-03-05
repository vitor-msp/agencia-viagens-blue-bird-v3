package br.com.agenciaviagens.bluebird.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Destination;
import br.com.agenciaviagens.bluebird.models.entities.Offer;
import br.com.agenciaviagens.bluebird.models.entities.Trip;
import br.com.agenciaviagens.bluebird.models.repositories.DestinationRepository;
import br.com.agenciaviagens.bluebird.models.repositories.OfferRepository;
import br.com.agenciaviagens.bluebird.models.repositories.TripRepository;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;
import br.com.agenciaviagens.bluebird.payload.response.TripResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/trips")
public class TripsController{

	@Autowired
	TripRepository tripRepository;

	@Autowired
	DestinationRepository destinationRepository;

	@Autowired
	OfferRepository offerRepository;
	
	@GetMapping
	public ResponseEntity<?> getTrips(
			@RequestParam(name = "destinationId") Integer destinationId,
			@RequestParam(name = "offerId", required = false) Integer offerId){
		
		try {
			Optional<Destination> destination = destinationRepository.findById(destinationId);
			List<Trip> trips = destination.get().getTrips();
			
			if(offerId != null) {
				Optional<Offer> offer = offerRepository.findById(offerId);
				
				if(offer.get().destinationIsValid(destination.get())) {
					
					trips = offer.get().validTrips(trips);
	
				}else {
					
					trips.clear();
				}
				
			}
			
			List<TripResponse> tripsResponse = new ArrayList<>();
			for(Trip trip: trips) {
				TripResponse tripResponse = new TripResponse(
					trip.getId(),
					trip.getDestination() != null ? trip.getDestination().getId() : null,
					trip.getDeparture(), trip.getArrival(), trip.getDefaultValue()
				);
				tripsResponse.add(tripResponse);
			}
			
			return ResponseEntity.ok(tripsResponse);
			
		} catch (Exception e) {
	
			return ResponseEntity.internalServerError()
					.body(new MessageResponse("Erro ao obter as viagens!"));
		}
	}
}
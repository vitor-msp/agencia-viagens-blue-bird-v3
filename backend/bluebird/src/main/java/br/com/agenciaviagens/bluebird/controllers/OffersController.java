package br.com.agenciaviagens.bluebird.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Destination;
import br.com.agenciaviagens.bluebird.models.entities.Offer;
import br.com.agenciaviagens.bluebird.models.repositories.OfferRepository;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;
import br.com.agenciaviagens.bluebird.payload.response.OfferResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/offers")
public class OffersController{

	@Autowired
	OfferRepository offerRepository;
	
	@GetMapping
	public ResponseEntity<?> getOffers(){
		try {
			
			List<OfferResponse> offersResponse = new ArrayList<>();
			for (Offer offer: offerRepository.findAll()) {
				
				OfferResponse offerResponse = new OfferResponse();
				offerResponse.setId(offer.getId());
				
				Destination destination = offer.getDestination();
				offerResponse.setDestinationId(destination == null ? null : destination.getId());
				
				offerResponse.setDiscount(offer.getDiscount());
				offerResponse.setExpiration(offer.getExpiration());
				
				offersResponse.add(offerResponse);
			}
			
			return ResponseEntity.ok(offersResponse);

		} catch (Exception e) {

			return ResponseEntity.internalServerError()
					.body(new MessageResponse("Erro ao obter as promoções!"));
		}
	}
}
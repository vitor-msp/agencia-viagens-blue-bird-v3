package br.com.agenciaviagens.bluebird.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.agenciaviagens.bluebird.models.entities.Client;
import br.com.agenciaviagens.bluebird.models.entities.Destination;
import br.com.agenciaviagens.bluebird.models.entities.Offer;
import br.com.agenciaviagens.bluebird.models.entities.Purchase;
import br.com.agenciaviagens.bluebird.models.entities.Trip;
import br.com.agenciaviagens.bluebird.models.repositories.ClientRepository;
import br.com.agenciaviagens.bluebird.models.repositories.DestinationRepository;
import br.com.agenciaviagens.bluebird.models.repositories.OfferRepository;
import br.com.agenciaviagens.bluebird.models.repositories.PurchaseRepository;
import br.com.agenciaviagens.bluebird.models.repositories.TripRepository;
import br.com.agenciaviagens.bluebird.payload.response.MessageResponse;
import br.com.agenciaviagens.bluebird.payload.response.TripResponse;
import br.com.agenciaviagens.bluebird.security.jwt.JwtUtils;

@RestController
@RequestMapping("/purchases")
public class PurchasesController{

	@Autowired
	TripRepository tripRepository;

	@Autowired
	OfferRepository offerRepository;
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	PurchaseRepository purchaseRepository;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@PostMapping
	public ResponseEntity<?> postPurchase(
			@RequestHeader("Authorization") String token,
			@RequestParam(name = "trip") Integer tripId,
			@RequestParam(name = "offer", required = false) Integer offerId){
		
		token = token.substring(7, token.length());
		String clientEmail = jwtUtils.getUserNameFromJwtToken(token);
		
		Optional<Client> client = clientRepository.findByEmail(clientEmail);
		if(client.isEmpty()) {
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro: Cliente não encontrado!"));
		}

		Optional<Trip> trip = tripRepository.findById(tripId);
		if(trip.isEmpty()) {
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro: Viagem não encontrada!"));
		}
		
		Purchase purchase = new Purchase();
		purchase.setClient(client.get());
		purchase.setTrip(trip.get());
		
		if(offerId != null) {
			
			Optional<Offer> offer = offerRepository.findById(offerId);
			if(offer.isEmpty()) {
				return ResponseEntity.badRequest()
						.body(new MessageResponse("Erro: Promoção não encontrada!"));
			}
			
			if(!offer.get().tripIsValid(trip.get())) {
				
				return ResponseEntity.badRequest().body(
					new MessageResponse("Erro: A promoção não é válida para a viagem selecionada!"));
			}
			
			purchase.setOffer(offer.get());
		}
		
		try {
			purchaseRepository.save(purchase);
			return ResponseEntity.ok(new MessageResponse("Viagem adquirida com sucesso!"));
		
		} catch (Exception e) {
			System.out.println(e);
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Erro ao adquirir a viagem!"));
		}		
	}
}
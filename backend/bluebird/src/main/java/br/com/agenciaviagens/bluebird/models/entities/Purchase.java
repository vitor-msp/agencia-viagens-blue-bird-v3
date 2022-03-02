package br.com.agenciaviagens.bluebird.models.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Purchase {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@ManyToOne
	@JsonIgnore
	private Client client;
	
	@NotNull
	@ManyToOne
	private Trip trip;
	
	@ManyToOne
	private Offer offer;
	
	public Purchase() {}
	
	public Purchase(@NotNull Client client, @NotNull Trip trip, Offer offer) {
		super();
		setClient(client);
		setTrip(trip);
		setOffer(offer);
	}
	
	public boolean clientIsValid(Client client) {
		
		if(this.getClient() != null && this.getClient().getId() == client.getId()) {
			return true;
		}
		
		return false;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public Trip getTrip() {
		return trip;
	}
	public void setTrip(Trip trip) {
		this.trip = trip;
	}
	public Offer getOffer() {
		return offer;
	}
	public void setOffer(Offer offer) {
		this.offer = offer;
	}
}

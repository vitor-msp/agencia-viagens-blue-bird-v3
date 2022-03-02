package br.com.agenciaviagens.bluebird.models.entities;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Offer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JsonIgnore
	private Destination destination;
	
	@NotBlank
	@Min(0)
	@Max(1)
	private float discount;
	
	@NotBlank
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	private Date expiration;
	
	public Offer() {}
	
	public Offer(Destination destination, @NotBlank @Min(0) @Max(1) float discount, @NotBlank Date expiration) {
		super();
		this.destination = destination;
		this.discount = discount;
		this.expiration = expiration;
	}
	
	public boolean destinationIsValid(Destination destination) {
		
		if(this.getDestination() != null && 
				this.getDestination().getId() != destination.getId()) {
			return false;
		}
		return true;
	}
	
	public boolean tripIsValid(Trip trip) {
		
		if(this.getDestination() != null && 
				this.getDestination().getId() != trip.getDestination().getId()) {
			return false;
		}
		return true;
	}
	
	public List<Trip> validTrips(List<Trip> trips){
		return trips.stream()
				.filter(t -> 
				t.getDeparture().before(this.getExpiration()))
				.collect(Collectors.toList());
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Destination getDestination() {
		return destination;
	}
	public void setDestination(Destination destination) {
		this.destination = destination;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public Date getExpiration() {
		return expiration;
	}
	public void setExpiration(Date expiration) {
		this.expiration = expiration;
	}
}

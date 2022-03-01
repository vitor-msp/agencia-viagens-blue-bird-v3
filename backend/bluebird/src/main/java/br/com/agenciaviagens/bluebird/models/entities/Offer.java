package br.com.agenciaviagens.bluebird.models.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Offer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
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

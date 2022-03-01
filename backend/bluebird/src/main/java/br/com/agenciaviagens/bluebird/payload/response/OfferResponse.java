package br.com.agenciaviagens.bluebird.payload.response;

import java.util.Date;

public class OfferResponse {
	
	private Integer id;
	private Integer destinationId;
	private float discount;
	private Date expiration;
	
	public OfferResponse() {}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getDestinationId() {
		return destinationId;
	}
	public void setDestinationId(Integer destinationId) {
		this.destinationId = destinationId;
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

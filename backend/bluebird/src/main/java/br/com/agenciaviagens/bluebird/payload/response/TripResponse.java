package br.com.agenciaviagens.bluebird.payload.response;

import java.util.Date;

public class TripResponse {
	
	private Integer id;
	private Integer destinationId;
	private Date departure;
	private Date arrival;
	private Double defaultValue;
	
	public TripResponse() {}

	public TripResponse(Integer id, Integer destinationId, Date departure, Date arrival, Double defaultValue) {
		super();
		this.id = id;
		this.destinationId = destinationId;
		this.departure = departure;
		this.arrival = arrival;
		this.defaultValue = defaultValue;
	}

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

	public Date getDeparture() {
		return departure;
	}

	public void setDeparture(Date departure) {
		this.departure = departure;
	}

	public Date getArrival() {
		return arrival;
	}

	public void setArrival(Date arrival) {
		this.arrival = arrival;
	}

	public Double getDefaultValue() {
		return defaultValue;
	}

	public void setDefaultValue(Double defaultValue) {
		this.defaultValue = defaultValue;
	}
}

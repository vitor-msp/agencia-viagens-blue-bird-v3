package br.com.agenciaviagens.bluebird.models.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Trip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@ManyToOne
	private Destination destination;
	
	@NotBlank
	private String departure;
	
	@NotBlank
	private String arrival;
	
	@NotBlank
	private Double defaultValue;
	
	public Trip() {}
	public Trip(@NotNull Destination destination, @NotBlank String departure, @NotBlank String arrival,
			@NotBlank Double defaultValue) {
		super();
		setDestination(destination);
		setDeparture(departure);
		setArrival(arrival);
		setDefaultValue(defaultValue);
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
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	public Double getDefaultValue() {
		return defaultValue;
	}
	public void setDefaultValue(Double defaultValue) {
		this.defaultValue = defaultValue;
	}
}

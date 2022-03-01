package br.com.agenciaviagens.bluebird.models.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Trip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotNull
	@ManyToOne
	private Destination destination;
	
	@NotBlank
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	private Date departure;
	
	@NotBlank
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	private Date arrival;
	
	@NotBlank
	@Min(0)
	private Double defaultValue;
	
	public Trip() {}

	public Trip(@NotNull Destination destination, @NotBlank Date departure, @NotBlank Date arrival,
			@NotBlank @Min(0) Double defaultValue) {
		super();
		this.destination = destination;
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
	public Destination getDestination() {
		return destination;
	}
	public void setDestination(Destination destination) {
		this.destination = destination;
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

package br.com.agenciaviagens.bluebird.models.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Destination {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank
	@Size(max = 30)
	private String city;
	
	@NotBlank
	@Size(max = 2)
	private String uf;
	
	@NotBlank
	@Size(max = 30)
	private String landingPlace;
	
	@JsonIgnore
	@OneToMany(mappedBy = "destination")
	private List<Trip> trips;
	
	public Destination() {}
	
	public Destination(@NotBlank @Size(max = 30) String city, @NotBlank @Size(max = 2) String uf,
			@NotBlank @Size(max = 30) String landingPlace) {
		super();
		this.city = city;
		this.uf = uf;
		this.landingPlace = landingPlace;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getLandingPlace() {
		return landingPlace;
	}
	public void setLandingPlace(String landingPlace) {
		this.landingPlace = landingPlace;
	}
	public List<Trip> getTrips() {
		if(this.trips == null) {
			this.trips = new ArrayList<>();
		}
		return trips;
	}
	public void setTrips(List<Trip> trips) {
		this.trips = trips;
	}
}

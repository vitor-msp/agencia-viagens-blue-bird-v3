package br.com.agenciaviagens.bluebird.models.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonIgnore
	private Integer id;
	
	@NotBlank
	@Size(max = 50)
	private String name;
	
	@NotBlank
	@Size(max = 10)
	private String rg;
	
	@NotBlank
	@Size(min = 11, max = 11)
	private String cpf;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date birthDate;
	
	@NotBlank
	@Email
	@Size(max = 30)
	private String email;
	
	@NotBlank
	@Size(max = 100)
	@JsonIgnore
	private String password;
	
	@OneToMany(mappedBy = "client", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Purchase> purchases;

	public Client() {}
	
	public Client(@NotBlank @Size(max = 50) String name, @NotBlank @Size(max = 10) String rg,
			@NotBlank @Size(min = 11, max = 11) String cpf, @NotBlank Date birthDate,
			@NotBlank @Email @Size(max = 30) String email, @NotBlank @Size(max = 100) String password) {
		super();
		this.name = name;
		this.rg = rg;
		this.cpf = cpf;
		this.birthDate = birthDate;
		this.email = email;
		this.password = password;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Purchase> getPurchases() {
		if(this.purchases == null) {
			this.purchases = new ArrayList<>();
		}
		return purchases;
	}
	public void setPurchases(List<Purchase> purchases) {
		this.purchases = purchases;
	}
}
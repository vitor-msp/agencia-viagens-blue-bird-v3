package br.com.agenciaviagens.bluebird.models.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String rg;
	
	@NotBlank
	private String cpf;
	
	@NotBlank
	private String birthDate;
	
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
	@OneToMany(mappedBy = "client", fetch = FetchType.EAGER)
	private List<Purchase> purchases;

	public Client() {}
	
	public Client(@NotBlank String name, @NotBlank String rg, @NotBlank String cpf, @NotBlank String birthDate,
			@NotBlank String email, @NotBlank String password) {
		super();
		setName(name);
		setRg(rg);
		setCpf(cpf);
		setBirthDate(birthDate);
		setEmail(email);
		setPassword(password);
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
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
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
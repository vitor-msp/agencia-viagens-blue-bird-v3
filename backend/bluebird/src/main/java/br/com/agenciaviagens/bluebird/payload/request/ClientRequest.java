package br.com.agenciaviagens.bluebird.payload.request;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

public class ClientRequest {

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
	@Size(max = 30)
	private String password;

	public ClientRequest() {}
	
	public ClientRequest(@NotBlank @Size(max = 50) String name, @NotBlank @Size(max = 10) String rg,
			@NotBlank @Size(min = 11, max = 11) String cpf, @NotBlank Date birthDate,
			@NotBlank @Size(max = 100) String password) {
		super();
		this.name = name;
		this.rg = rg;
		this.cpf = cpf;
		this.birthDate = birthDate;
		this.password = password;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
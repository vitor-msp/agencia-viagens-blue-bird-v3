package br.com.agenciaviagens.bluebird.payload.request;

//import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
//	@Email
	private String email;

	@NotBlank
	private String password;

	public String getUsername() {
		return email;
	}

	public void setUsername(String username) {
		this.email = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
package br.com.agenciaviagens.bluebird.payload.request;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


public class ChangePasswordRequest {

	@NotBlank
	@Size(max = 30)
	private String oldPassword;
	
	@NotBlank
	@Size(max = 30)
	private String newPassword;

	public ChangePasswordRequest() {}
	
	public ChangePasswordRequest(@NotBlank @Size(max = 30) String oldPassword,
			@NotBlank @Size(max = 30) String newPassword) {
		super();
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}

	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String password) {
		this.oldPassword = password;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String password) {
		this.newPassword = password;
	}
}
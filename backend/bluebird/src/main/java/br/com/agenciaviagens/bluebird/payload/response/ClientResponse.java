package br.com.agenciaviagens.bluebird.payload.response;

import br.com.agenciaviagens.bluebird.models.entities.Client;

public class ClientResponse {

	private Client client;
	private String token;
	private String tokenType = "Bearer";
	
	public ClientResponse(Client client, String token, String tokenType) {
		super();
		this.setClient(client);
		this.setToken(token);
		this.setTokenType(tokenType);
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
}
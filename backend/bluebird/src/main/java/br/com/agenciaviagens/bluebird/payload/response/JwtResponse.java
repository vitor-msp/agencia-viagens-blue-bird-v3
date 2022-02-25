package br.com.agenciaviagens.bluebird.payload.response;


public class JwtResponse {
	
  private String token;
  private String type = "Bearer";
  private int id;
  private String email;

  public JwtResponse(String accessToken, int id, String email) {
    setToken(accessToken);
    setId(id);
    setEmail(email);
  }

  public String getToken() {
    return token;
  }

  public void setToken(String accessToken) {
    this.token = accessToken;
  }

  public String getTokenType() {
    return type;
  }

  public void setTokenType(String tokenType) {
    this.type = tokenType;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
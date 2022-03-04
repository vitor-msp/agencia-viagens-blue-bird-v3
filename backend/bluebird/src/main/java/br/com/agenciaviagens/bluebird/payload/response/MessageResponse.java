package br.com.agenciaviagens.bluebird.payload.response;

public class MessageResponse {

  private String message;

  public MessageResponse(String message) {
    setMessage(message);
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
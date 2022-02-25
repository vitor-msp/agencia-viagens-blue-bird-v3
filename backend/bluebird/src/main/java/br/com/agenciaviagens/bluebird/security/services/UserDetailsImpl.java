package br.com.agenciaviagens.bluebird.security.services;

import java.util.Collection;
import java.util.Objects;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.agenciaviagens.bluebird.models.entities.Client;

public class UserDetailsImpl implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	private int id;	
	private String email;	
	@JsonIgnore
	private String password;
	
	public UserDetailsImpl(int id, String email, String password) {
		this.id = id;
		this.email = email;
		this.password = password;
	}
	
	public static UserDetailsImpl build(Client client) {
		return new UserDetailsImpl(
				client.getId(),
				client.getEmail(),
				client.getPassword());
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}
	public int getId() {
		return id;
	}
	@Override
	public String getPassword() {
		return password;
	}
	@Override
	public String getUsername() {
		return email;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}
	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}
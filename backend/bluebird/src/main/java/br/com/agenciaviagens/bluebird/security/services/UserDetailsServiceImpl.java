package br.com.agenciaviagens.bluebird.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.agenciaviagens.bluebird.models.entities.Client;
//import br.com.agenciaviagens.bluebird.models.entities.User;
import br.com.agenciaviagens.bluebird.models.repositories.ClientRepository;
//import br.com.agenciaviagens.bluebird.models.repositories.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	ClientRepository clientRepository;
	@Override
	@Transactional
	public UserDetailsImpl loadUserByUsername(String email) throws UsernameNotFoundException {
		Client client = clientRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + email));
		return UserDetailsImpl.build(client);
	}
}
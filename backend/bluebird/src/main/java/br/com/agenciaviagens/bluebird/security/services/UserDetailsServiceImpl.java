package br.com.agenciaviagens.bluebird.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.agenciaviagens.bluebird.models.entities.Client;
import br.com.agenciaviagens.bluebird.models.repositories.ClientRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	ClientRepository clientRepository;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Client client = clientRepository.findByEmail(email)
				.orElseThrow(() -> 
					new UsernameNotFoundException("Usuário não encontrado pelo e-mail: " + email));
		return UserDetailsImpl.build(client);
	}
}
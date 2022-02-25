package br.com.agenciaviagens.bluebird.models.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.agenciaviagens.bluebird.models.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
	Optional<Client> findByEmail(String email);
	Boolean existsByEmail(String email);
}
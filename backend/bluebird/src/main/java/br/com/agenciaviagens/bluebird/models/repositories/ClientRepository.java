package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.agenciaviagens.bluebird.models.entities.Client;

public interface ClientRepository extends PagingAndSortingRepository<Client, Integer> {

}
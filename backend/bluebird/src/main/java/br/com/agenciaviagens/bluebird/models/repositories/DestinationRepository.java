package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.agenciaviagens.bluebird.models.entities.Destination;

public interface DestinationRepository extends PagingAndSortingRepository<Destination, Integer> {

}
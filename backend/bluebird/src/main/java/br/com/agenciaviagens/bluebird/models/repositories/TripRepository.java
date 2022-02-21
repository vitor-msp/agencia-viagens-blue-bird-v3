package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.agenciaviagens.bluebird.models.entities.Trip;

public interface TripRepository extends PagingAndSortingRepository<Trip, Integer> {

}
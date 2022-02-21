package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.agenciaviagens.bluebird.models.entities.Offer;

public interface OfferRepository extends PagingAndSortingRepository<Offer, Integer> {

}
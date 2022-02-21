package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.agenciaviagens.bluebird.models.entities.Purchase;

public interface PurchaseRepository extends PagingAndSortingRepository<Purchase, Integer> {

}
package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.agenciaviagens.bluebird.models.entities.Contact;

public interface ContactRepository extends PagingAndSortingRepository<Contact, Integer> {

}
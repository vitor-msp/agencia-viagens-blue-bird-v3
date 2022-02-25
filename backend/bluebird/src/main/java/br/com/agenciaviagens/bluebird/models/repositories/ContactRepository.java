package br.com.agenciaviagens.bluebird.models.repositories;

import org.springframework.data.repository.CrudRepository;

import br.com.agenciaviagens.bluebird.models.entities.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}
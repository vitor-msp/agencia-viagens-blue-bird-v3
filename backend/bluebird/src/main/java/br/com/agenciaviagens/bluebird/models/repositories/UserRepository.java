//package br.com.agenciaviagens.bluebird.models.repositories;
//
//import java.util.Optional;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import br.com.agenciaviagens.bluebird.models.entities.User;
//
//@Repository
//public interface UserRepository extends JpaRepository<User, Long> {
//	Optional<User> findByUsername(String username);
//	Boolean existsByUsername(String username);
//	Boolean existsByEmail(String email);
//}
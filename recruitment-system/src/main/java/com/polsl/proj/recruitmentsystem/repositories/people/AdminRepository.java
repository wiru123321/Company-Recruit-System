package com.polsl.proj.recruitmentsystem.repositories.people;

import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {


    Optional<Admin> findByFirstName(String firstName);
}

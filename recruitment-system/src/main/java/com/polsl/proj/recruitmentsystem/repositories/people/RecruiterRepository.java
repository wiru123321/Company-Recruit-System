package com.polsl.proj.recruitmentsystem.repositories.people;

import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter,Integer> {



    Optional<Recruiter> findByFirstName(String firstName);
}

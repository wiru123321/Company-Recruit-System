package com.polsl.proj.recruitmentsystem.repositories;

import com.polsl.proj.recruitmentsystem.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter,Integer> {



    Optional<Recruiter> findByFirstName(String firstName);
}

package com.polsl.proj.recruitmentsystem.repositories.people;

import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HeadRecruiterRepository  extends JpaRepository<HeadRecruiter,Integer> {


    Optional<HeadRecruiter> findByFirstName(String firstName);
}

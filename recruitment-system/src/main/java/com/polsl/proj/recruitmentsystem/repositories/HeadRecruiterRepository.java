package com.polsl.proj.recruitmentsystem.repositories;

import com.polsl.proj.recruitmentsystem.model.HeadRecruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HeadRecruiterRepository  extends JpaRepository<HeadRecruiter,Integer> {


    Optional<HeadRecruiter> findByFirstName(String firstName);
}

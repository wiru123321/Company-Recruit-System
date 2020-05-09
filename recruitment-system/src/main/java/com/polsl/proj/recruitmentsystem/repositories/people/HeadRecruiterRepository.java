package com.polsl.proj.recruitmentsystem.repositories.people;

import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HeadRecruiterRepository  extends JpaRepository<HeadRecruiter,Integer> {


    Optional<HeadRecruiter> findByFirstName(String firstName);

    @Query("SELECT h.department FROM HeadRecruiter h WHERE h.firstName = :firstName")
    String getDepartmentForUser(@Param("firstName")String firstName);
}

package com.polsl.proj.recruitmentsystem.repositories.people;

import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter,Integer> {

   Optional<Recruiter> findByFirstName(String firstName);

   @Query("SELECT r.department FROM Recruiter r WHERE r.firstName = :firstName")
   String getDepartmentForUser(@Param("firstName")String firstName);
}

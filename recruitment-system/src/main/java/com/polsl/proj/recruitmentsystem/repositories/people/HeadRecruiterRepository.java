package com.polsl.proj.recruitmentsystem.repositories.people;

import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface HeadRecruiterRepository  extends JpaRepository<HeadRecruiter,Integer> {


    Optional<HeadRecruiter> findByFirstName(String firstName);

    @Query("SELECT h.department FROM HeadRecruiter h WHERE h.firstName = :firstName")
    String getDepartmentForUser(@Param("firstName")String firstName);
    @Modifying
    @Transactional
    @Query("DELETE FROM  HeadRecruiter HR WHERE HR.firstName= :firstName")
    int deleteByFirstname(@Param("firstName")String firstName);

    @Query("SELECT h.department FROM HeadRecruiter h")
    List<String> getAllDepartments();
}

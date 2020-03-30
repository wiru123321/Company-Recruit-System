package com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes;

import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface EducationRepository  extends JpaRepository<Education,Integer> {

    @Query("SELECT ed FROM Education ed WHERE ed.recruit = :recruit")
    Education getEducationByRecruit(@Param("recruit") Recruit recruit);
}

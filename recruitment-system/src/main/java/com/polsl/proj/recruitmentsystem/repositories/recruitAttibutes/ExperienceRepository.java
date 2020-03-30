package com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes;

import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.EmpolymentExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRepository extends JpaRepository<EmpolymentExperience,Integer> {


    @Query("SELECT ex FROM EmpolymentExperience ex WHERE ex.recruit = :recruit")
    EmpolymentExperience getByRecruit(@Param("recrut")Recruit recruit);
}

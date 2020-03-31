package com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes;

import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository  extends JpaRepository<Skill,Integer> {

    @Query("SELECT s FROM Skill s WHERE s.recruit = :recruit")
    Skill getSkillByRecruit(@Param("recruit") Recruit recruit);
}

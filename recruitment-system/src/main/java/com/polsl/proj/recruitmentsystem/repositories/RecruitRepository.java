package com.polsl.proj.recruitmentsystem.repositories;

import com.polsl.proj.recruitmentsystem.model.Recruit;
import com.polsl.proj.recruitmentsystem.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruitRepository  extends JpaRepository<Recruit,Integer> {
}

package com.polsl.proj.recruitmentsystem.repositories.recruitmentParams;

import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication,Integer> {

    @Query("SELECT ja FROM JobApplication ja WHERE ja.applicationId = :id")
    JobApplication getByApplicationId(@Param("id") Long id);
}

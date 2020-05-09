package com.polsl.proj.recruitmentsystem.repositories.recruitmentParams;

import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication,Integer> {

    @Query("SELECT ja FROM JobApplication ja WHERE ja.applicationId = :id")
    JobApplication getByApplicationId(@Param("id") Long id);

    @Query("SELECT ja FROM JobApplication ja WHERE ja.position = :position AND ja.status = :status")
    List<JobApplication> findAllByParams(@Param("position")String position,@Param("status") String status);

    @Query("SELECT ja FROM JobApplication ja WHERE ja.department = :department")
    List<JobApplication> findAllByDepartment(@Param("department")String department);
}

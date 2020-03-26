package com.polsl.proj.recruitmentsystem.repositories.recruitmentParams;

import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Rate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RateRepository extends JpaRepository<Rate,Integer> {

    @Query("SELECT r FROM Rate r WHERE r.rateId = :id")
    Rate getByRateId(@Param("id") Long id);
}

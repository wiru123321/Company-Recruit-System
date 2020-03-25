package com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes;

import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingRepository  extends JpaRepository<Training,Integer> {

    @Query("SELECT t FROM Training t WHERE t.trainingId = :id")
    Training getByTrainingId(@Param("id")Long id);
}

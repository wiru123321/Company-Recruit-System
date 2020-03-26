package com.polsl.proj.recruitmentsystem.repositories.recruitmentParams;

import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Decission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DecissionRepository extends JpaRepository<Decission,Integer> {

    @Query("SELECT d FROM Decission d WHERE d.decissionId = :id")
    Decission getByDecissionId(@Param("id") Long id);
}

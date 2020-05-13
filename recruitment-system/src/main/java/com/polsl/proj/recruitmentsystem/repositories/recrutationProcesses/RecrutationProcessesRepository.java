package com.polsl.proj.recruitmentsystem.repositories.recrutationProcesses;


import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecrutationProcessesRepository extends JpaRepository<RecrutationProcess,Long> {


    @Query("SELECT rp FROM RecrutationProcess rp WHERE rp.department = :department")
    List<RecrutationProcess> findAllByDepartment(@Param("department")String department);
}

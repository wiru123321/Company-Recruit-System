package com.polsl.proj.recruitmentsystem.business.services.recrutationProcesses;


import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
import com.polsl.proj.recruitmentsystem.repositories.recrutationProcesses.RecrutationProcessesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RecrutationProcessService {

    private final RecrutationProcessesRepository recrutationProcessesRepository;

     List<RecrutationProcess> getAllRecrutationProcesses(String department) {
        return recrutationProcessesRepository.findAllByDepartment(department);
    }
}

package com.polsl.proj.recruitmentsystem.business.services.recrutationProcesses;

import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class RecrutationProcessFacade {

    private final RecrutationProcessService recrutationProcessService;

    public List<RecrutationProcess> getAllRecrutationProcesses(String department) {
        return recrutationProcessService.getAllRecrutationProcesses(department);
    }
}

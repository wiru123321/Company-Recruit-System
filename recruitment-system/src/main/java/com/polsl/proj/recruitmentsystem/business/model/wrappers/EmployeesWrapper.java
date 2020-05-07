package com.polsl.proj.recruitmentsystem.business.model.wrappers;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.EmployeeDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class EmployeesWrapper {

    private List<EmployeeDTO> headRecruiterList;
    private List<EmployeeDTO> recruiterList;            // można to wrzucić w jedną listę zamiast 2

    public EmployeesWrapper(List<EmployeeDTO> headRecruiters,List<EmployeeDTO>recruiters){
        this.headRecruiterList= headRecruiters;
        this.recruiterList=recruiters;
    }
}

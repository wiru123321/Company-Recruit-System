package com.polsl.proj.recruitmentsystem.model.DTO.InputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FullRecruitDTO {

    private String firstName;
    private String lastName;
    private String trainingName;
    private String description;
    private Date trainingDate;
}

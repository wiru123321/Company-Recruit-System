package com.polsl.proj.recruitmentsystem.model.DTO.POJOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrainingPOJO {

    private String trainingName;
    private String trainingDescription;
    private Date trainingDate;
    private Long recruitID;
}

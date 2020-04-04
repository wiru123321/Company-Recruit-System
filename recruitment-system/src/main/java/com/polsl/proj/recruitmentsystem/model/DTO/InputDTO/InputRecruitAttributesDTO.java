package com.polsl.proj.recruitmentsystem.model.DTO.InputDTO;

import com.polsl.proj.recruitmentsystem.model.DTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.model.DTO.POJOs.SkillPOJO;
import com.polsl.proj.recruitmentsystem.model.DTO.POJOs.TrainingPOJO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InputRecruitAttributesDTO {
    private List<String> educationDegrees;
    private List<SkillPOJO> skills;
    private List<TrainingPOJO> trainings;
    private List<ExperiencePOJO> experiences;
}

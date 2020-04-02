package com.polsl.proj.recruitmentsystem.model.DTO.InputDTO;

import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.POJOs.SkillPOJO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.POJOs.TrainingPOJO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RecruitAttributesDTO {
    private List<String> educationDegrees;
    private List<SkillPOJO> skills;
    private List<TrainingPOJO> trainings;
    private List<ExperiencePOJO> experiences;
}

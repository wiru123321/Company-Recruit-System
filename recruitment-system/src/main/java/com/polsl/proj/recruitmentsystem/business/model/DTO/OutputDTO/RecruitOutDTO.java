package com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO;



import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.SkillPOJO;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecruitOutDTO {

    private String firstName;
    private String lastName;
    private Long ID;

    private List<String> educations;
    private List<ExperiencePOJO> empolymentExperiences;
    private List<SkillPOJO> skills;
    private List<TrainingOutDTO> trainings;
}

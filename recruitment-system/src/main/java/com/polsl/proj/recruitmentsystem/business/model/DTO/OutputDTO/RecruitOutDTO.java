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
public class RecruitOutDTO {        // duplikacja z RecruitDTO

    private String firstName;
    private String lastName;

    private List<String> educations;
    private List<ExperiencePOJO> empolymentExperiences;
    private List<SkillPOJO> skills;             //muszę się zdecydować czy POJO czy DTO jako nazwy
    private List<TrainingOutDTO> trainings;
}

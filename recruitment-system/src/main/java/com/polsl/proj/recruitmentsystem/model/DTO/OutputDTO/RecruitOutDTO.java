package com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO;



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

  //  private List<Education> educations; TODO Implement DTO

  //  private List<EmpolymentExperience> empolymentExperiences; TODO Implement DTO

   // private List<Sk> skills; TODO Implement DTO

    private List<TrainingOutDTO> trainings;
}

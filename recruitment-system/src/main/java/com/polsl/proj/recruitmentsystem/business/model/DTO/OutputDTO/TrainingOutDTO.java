package com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO;


import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TrainingOutDTO {

    private String name;
    private String description;
    private Date date;
}

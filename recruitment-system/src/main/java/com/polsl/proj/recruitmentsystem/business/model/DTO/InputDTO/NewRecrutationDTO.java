package com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NewRecrutationDTO {
    private String description;
    private String position;
    private Integer maxHires;
}

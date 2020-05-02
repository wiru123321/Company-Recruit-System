package com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NewRecrutationDTO {
    private String position;
    private String description;
    private Integer maxHires;
}

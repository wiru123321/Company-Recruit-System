package com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InputDecissionDTO {
    private String description;
    private Long jobApplicationID;
    private Integer result;
    private String rate;
}

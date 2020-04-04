package com.polsl.proj.recruitmentsystem.model.DTO.InputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FullDecissionDTO {
    private String description;
    private Long jobApplicationID;
    private Integer result;
    private String rate;
}

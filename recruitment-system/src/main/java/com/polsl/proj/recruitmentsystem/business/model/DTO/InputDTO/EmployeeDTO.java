package com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO {

    private String firstName;
    private String lastName;
    private String password;
    private String type;
}

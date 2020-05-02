package com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SearchParametersFINAL {

    private String position;
    private String status;
    private Integer result;
    private String rate;
    private String firstName;
    private String lastName;
}

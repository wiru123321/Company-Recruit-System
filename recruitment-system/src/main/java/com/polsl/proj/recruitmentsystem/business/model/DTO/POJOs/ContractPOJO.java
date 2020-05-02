package com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ContractPOJO {
    private String contract;
    private String salary;
    private String dateFrom;
    private String dateTo;
}

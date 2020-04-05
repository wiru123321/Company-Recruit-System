package com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExperiencePOJO {

    private Date dateFrom;
    private Date dateTo;
    private String position;
}

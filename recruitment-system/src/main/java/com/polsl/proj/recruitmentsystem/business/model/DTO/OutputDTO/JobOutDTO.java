package com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class  JobOutDTO {
    private String position;
    private String status;

    private DecissionOutDTO decission;
    private RateOutDTO rate;
    private RecruitOutDTO recruit;
}

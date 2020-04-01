package com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO;

import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Decission;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Rate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobOutDTO {
    private String position;
    private String status;

 //   private DecissionOutDTO decission; TODO: Implement

 //   private RateOutDTO rate;      TODO: Implement

    private RecruitOutDTO recruit;
}

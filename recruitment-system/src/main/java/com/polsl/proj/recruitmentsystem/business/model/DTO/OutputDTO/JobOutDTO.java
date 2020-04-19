package com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
<<<<<<< HEAD
public class  JobOutDTO {
=======
public class JobOutDTO {
    private Long id;
>>>>>>> a273dbbdc96e34cfd698800bf54cf2ea543f56c8
    private String position;
    private String status;

    private DecissionOutDTO decission;
    private RateOutDTO rate;
    private RecruitOutDTO recruit;
}

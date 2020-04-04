package com.polsl.proj.recruitmentsystem.model.recruitmentParams;


import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobApplication {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long applicationId;

public String position;
private String status;

    @OneToOne(mappedBy = "jobApplication")
    private Decission decission;

    @OneToOne(mappedBy = "jobApplication")
    private Rate rate;

    @OneToOne
    private Recruit recruit;


    public JobApplication(String position,String status,Integer result,String rate){
        this.position=position;
        this.status=status;
        this.decission = new Decission(result);
        this.rate= new Rate(rate);
    }

}

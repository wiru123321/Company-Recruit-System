package com.polsl.proj.recruitmentsystem.business.model.recruitmentParams;


import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class JobApplication {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long applicationId;

@NonNull
public String position;
@NonNull
private String status;
@NonNull
private String department;

    @OneToOne(mappedBy = "jobApplication")
    private Decission decission;

    @OneToOne(mappedBy = "jobApplication")
    private Rate rate;

    @OneToOne
    @NonNull
    private Recruit recruit;


    public JobApplication(String position,String status,Integer result,String rate,String department){
        this.position=position;
        this.status=status;
        this.decission = new Decission(result);
        this.rate= new Rate(rate);
        this.department=department;
    }

}

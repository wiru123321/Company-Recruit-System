package com.polsl.proj.recruitmentsystem.model.recruitmentParams;


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

private String position;
private String status;

    @OneToOne(mappedBy = "jobApplication")
    //@JoinColumn(name = "db_id",unique = true)
    private Decission decission;

    @OneToOne(mappedBy = "jobApplication")
    //@JoinColumn(name = "db_id",unique = true)
    private Rate rate;











}

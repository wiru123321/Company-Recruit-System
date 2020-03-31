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
public class Decission {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Long decissionId;

 private Result result;
 private String description;

 @OneToOne
 private JobApplication jobApplication;
}

enum Result{
    positive,negative,undefinied
}

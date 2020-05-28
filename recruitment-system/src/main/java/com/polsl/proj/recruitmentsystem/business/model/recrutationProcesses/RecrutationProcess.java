package com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class RecrutationProcess {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NonNull
    private String position;
    @NonNull
    private String requirements;
    @NonNull
    private Integer expectedRecruits;
    @NonNull
    private String department;
}

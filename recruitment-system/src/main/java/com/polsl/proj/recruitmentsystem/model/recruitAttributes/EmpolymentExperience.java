package com.polsl.proj.recruitmentsystem.model.recruitAttributes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EmpolymentExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long employmentId;
    private Date dateFrom;
    private Date dateTo;
    private String position;
}

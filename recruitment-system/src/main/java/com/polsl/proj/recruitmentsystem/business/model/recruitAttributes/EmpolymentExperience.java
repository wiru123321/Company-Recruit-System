package com.polsl.proj.recruitmentsystem.business.model.recruitAttributes;

import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;
}

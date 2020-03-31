package com.polsl.proj.recruitmentsystem.model.recruitAttributes;


import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long trainingId;

    private String name;
    private String description;
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;
}

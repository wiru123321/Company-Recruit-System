package com.polsl.proj.recruitmentsystem.model.recruitAttributes;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Training {

    @Id
  //  @GeneratedValue(strategy = GenerationType.AUTO)
    private Long trainingId;

    private String name;
    private String description;
    private Date date;
}

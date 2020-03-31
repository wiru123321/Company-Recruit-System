package com.polsl.proj.recruitmentsystem.model.recruitAttributes;

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
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long educationId;
    private EduDegree degree;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;
}


enum EduDegree {
    secondary, vocational, higher
}
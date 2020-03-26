package com.polsl.proj.recruitmentsystem.model.recruitAttributes;

import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long skillId;

    private String skillName;
    private skillLevel skillLevel;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;

}

 enum skillLevel{
    beginner, intermediate, advanced, expert
}
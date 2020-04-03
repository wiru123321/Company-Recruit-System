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
    private SkillLevel skillLevel;

    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;

    public void setSkillLevel(String skillLevelDesc) {
        switch (skillLevelDesc) {
            case "poczatkujacy": {
                this.skillLevel = SkillLevel.beginner;
                break;
            }
            case "srednio-zaawansowany": {
                this.skillLevel = SkillLevel.intermediate;
                break;
            }
            case "zaawansowany": {
                this.skillLevel = SkillLevel.advanced;
                break;
            }
            case "ekspert": {
                this.skillLevel = SkillLevel.expert;
                break;
            }
            default: {
                this.skillLevel = SkillLevel.invalid;
                break;
            }
        }
    }
}

 enum SkillLevel{
    invalid,beginner, intermediate, advanced, expert
}
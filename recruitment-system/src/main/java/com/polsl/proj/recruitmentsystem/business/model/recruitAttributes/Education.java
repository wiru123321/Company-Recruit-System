package com.polsl.proj.recruitmentsystem.business.model.recruitAttributes;

import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
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

    public String getEduDegree(){
        return degree.toString();
    }


    @ManyToOne(fetch = FetchType.LAZY)
    private Recruit recruit;

    public void setDegree(String degree) {       //TODO Refactor
        switch (degree) {
            case "srednie": {
                this.degree = EduDegree.secondary;
                break;
            }
            case "zawodowe": {
                this.degree = EduDegree.vocational;
                break;
            }
            case "wyzsze": {
                this.degree = EduDegree.higher;
                break;
            }
            default: {
                this.degree = EduDegree.invalid;
                break;
            }
        }
    }
}


enum EduDegree {
    invalid, secondary, vocational, higher
}
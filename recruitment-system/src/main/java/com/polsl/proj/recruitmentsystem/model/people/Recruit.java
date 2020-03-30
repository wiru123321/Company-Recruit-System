package com.polsl.proj.recruitmentsystem.model.people;


import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Education;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.EmpolymentExperience;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Skill;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@RequiredArgsConstructor
public class Recruit {

    @Id
 //   @GeneratedValue(strategy = GenerationType.AUTO)   TODO:WYŁACZONE DO TESTOW
    private Long id;
    private String firstName;
    private String lastName;

    @OneToMany(mappedBy = "recruit",   //  'mappedBy = "recruit"' oznacza,że 'private Recruit recruit' w
            cascade = CascadeType.ALL, // klasie Education odpowiada za relację (zawiera klucz obcy do query by znaleźć wszystkie wizyty dla danego rekruta
            orphanRemoval = true)
    private List<Education> educations;

    @OneToMany(mappedBy = "recruit",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<EmpolymentExperience> empolymentExperiences;

    @OneToMany(mappedBy = "recruit",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Skill> skills;

    @OneToMany(mappedBy = "recruit",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<Training> trainings;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void addTraining(Training training){
        this.trainings.add(training);
        training.setRecruit(this);
    }
}

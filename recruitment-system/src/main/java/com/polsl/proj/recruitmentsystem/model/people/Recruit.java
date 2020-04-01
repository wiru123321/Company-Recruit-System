package com.polsl.proj.recruitmentsystem.model.people;


import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.OutputDTO.TrainingOutDTO;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Education;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.EmpolymentExperience;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Skill;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.Rate;
import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Recruit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @OneToOne(mappedBy = "recruit")
    private JobApplication jobApplication;

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
        if(this.trainings==null){
            trainings = new LinkedList<>();
        }
        this.trainings.add(training);
        training.setRecruit(this);
    }


    public RecruitOutDTO dto(){

        List<TrainingOutDTO> trainingsDTO = new LinkedList<>();
        for(Training training : this.trainings){
            trainingsDTO.add(new TrainingOutDTO(training.getName(),training.getDescription(),training.getDate()));
        }

        return  RecruitOutDTO.builder()
                .firstName(this.firstName)
                .lastName(this.lastName)
                .trainings(trainingsDTO)
                .build();
    }
}

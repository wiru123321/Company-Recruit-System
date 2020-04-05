package com.polsl.proj.recruitmentsystem.business.model.people;


import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ExperiencePOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.SkillPOJO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.RecruitOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.TrainingOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Education;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.EmpolymentExperience;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Skill;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import lombok.*;

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
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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


    public Recruit(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        educations = new LinkedList<>();
        empolymentExperiences = new LinkedList<>();
        skills = new LinkedList<>();
        trainings = new LinkedList<>();
    }

    public void addTraining(Training training) {
        if (this.trainings == null) {
            trainings = new LinkedList<>();
        }
        this.trainings.add(training);
        training.setRecruit(this);
    }

    public RecruitOutDTO dto() {

        List<TrainingOutDTO> trainingsDTO = new LinkedList<>();
        for (Training training : this.trainings) {
            trainingsDTO.add(new TrainingOutDTO(training.getName(), training.getDescription(), training.getDate()));
        }
        List<SkillPOJO> skillsDTO = new LinkedList<>();
        for (Skill skill : this.skills) {
            skillsDTO.add(new SkillPOJO(skill.getSkillName(), skill.getSkillLevel()));
        }
        List<ExperiencePOJO> experiencesDTO = new LinkedList<>();
        for (EmpolymentExperience experience : this.empolymentExperiences) {
            experiencesDTO.add(new ExperiencePOJO(experience.getDateFrom(),experience.getDateTo(),experience.getPosition()));
        }
        List<String> educationsDTO = new LinkedList<>();
        for (Education education : this.educations) {
            educationsDTO.add(education.getEduDegree());
        }

        return RecruitOutDTO.builder()
                .firstName(this.firstName)
                .lastName(this.lastName)
                .trainings(trainingsDTO)
                .skills(skillsDTO)
                .empolymentExperiences(experiencesDTO)
                .educations(educationsDTO)
                .build();
    }

    public void addEducation(Education education) {
        if (this.educations == null) {
            educations = new LinkedList<>();
        }
        this.educations.add(education);
       // education.setRecruit(this);
    }
}

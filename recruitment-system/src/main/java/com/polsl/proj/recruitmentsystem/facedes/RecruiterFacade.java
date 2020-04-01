package com.polsl.proj.recruitmentsystem.facedes;


import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.FullApplicationDto;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.FullRecruitDTO;
import com.polsl.proj.recruitmentsystem.model.DTO.InputDTO.TrainingDTO;
import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.model.recruitmentParams.JobApplication;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.TrainingRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitmentParams.JobApplicationRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class RecruiterFacade {

     @Autowired // Autowired jest wymagany dla POSTMAN / INSOMNIA
    public RecruitRepository recruitRepository;
     @Autowired
    public TrainingRepository trainingRepository;
    @Autowired
    public JobApplicationRepository jobApplicationRepository;



    public void addNewRecruit(FullRecruitDTO dto) {
        Training training = new Training();
        training.setDate(dto.getTrainingDate());
        training.setDescription(dto.getDescription());
        training.setName(dto.getTrainingName());
        trainingRepository.save(training);
        Recruit recruit = new Recruit();
        recruit.setFirstName(dto.getFirstName());
        recruit.setLastName(dto.getLastName());
        recruit.addTraining(training);
        recruitRepository.save(recruit);
    }

    public void addNewApplication(FullApplicationDto dto) {
        Training training = new Training();
        training.setDate(dto.getTrainingDate());
        training.setDescription(dto.getDescription());
        training.setName(dto.getTrainingName());
        trainingRepository.save(training);
        Recruit recruit = new Recruit();
        recruit.setFirstName(dto.getFirstName());
        recruit.setLastName(dto.getLastName());
        recruit.addTraining(training);
        recruitRepository.save(recruit);
        JobApplication jobApplication = new JobApplication();
        jobApplication.setStatus("nierozpatrzony");
        jobApplication.setPosition(dto.getApplicationPosition());
        jobApplication.setRecruit(recruit);
        jobApplicationRepository.save(jobApplication);

    }



    public void addTraining(TrainingDTO dto) {
        Training training = new Training();
        training.setDate(dto.getDate());
        training.setDescription(dto.getDescription());
        training.setName(dto.getName());
        Recruit recruit = recruitRepository.findById(dto.getRecruitID());
        recruit.addTraining(training);
        trainingRepository.save(training);
    }


    //TODO Implement
}

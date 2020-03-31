package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.facedes.RecruiterFacade;
import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;
import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/recruiter")
public class RecruiterController {

    @Autowired
    RecruiterFacade recruiterFacade;

    @Autowired
    RecruitRepository recruitRepository;
    @Autowired
    TrainingRepository trainingRepository;

    @GetMapping("/main")
    String recruiterPage(){
        return "recruiter/main";
    }

    @GetMapping("/addFull")
    @ResponseBody
    public String addFullRecruit(){     //TODO:Refactor
        Training training = new Training();
        training.setDate(null);
        training.setDescription("aaa");
        training.setName("bbbb");
        Recruit recruit = new Recruit();
        recruit.setFirstName("aaaa");
        recruit.setLastName("bbb");
        recruit.addTraining(training);
        return "W bazie danych zapisano:"+ recruitRepository.save(recruit).toString();
    }


    @GetMapping("/addTraining")
    @ResponseBody
    public String addTraining(){        //TODO: Refactor
        Training training = new Training();
        training.setDate(null);
        training.setDescription("test");
        training.setName("test");
        Recruit recruit = recruitRepository.findById(2L);
        recruit.addTraining(training);
       return "Rekrutowi dodano szkolenie"+  trainingRepository.save(training);
    }
}

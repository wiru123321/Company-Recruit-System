package com.polsl.proj.recruitmentsystem.controllers;



import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.TrainingPOJO;
import com.polsl.proj.recruitmentsystem.business.services.RecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@Controller
@RequestMapping("/recruiter")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class RecruiterController {

    private final RecruiterFacade recruiterFacade;

    @GetMapping("/main")
    String recruiterPage(){
        return "recruiter/main";
    }


    @PostMapping("/addFullApplication")
    @ResponseBody
    public String addFullApplication(@RequestPart RecruitDTO recruitDTO, @RequestPart InputRecruitAttributesDTO attributesDTO){
        recruiterFacade.addNewApplication(recruitDTO,attributesDTO);
        return "ok";    //TODO: Refactor
    }

    @PostMapping("/addTraining")
    public String addTraining(@RequestBody TrainingPOJO dto){
        recruiterFacade.addTraining(dto);
        return "recruiter/main";
    }

    @PostMapping("/addFiles")
    public void addFiles(@RequestParam MultipartFile file){
        try {
            recruiterFacade.saveFile(file);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

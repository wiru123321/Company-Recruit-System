package com.polsl.proj.recruitmentsystem;

import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.services.admin.AdminFacade;
import com.polsl.proj.recruitmentsystem.business.services.headRecruiter.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.services.recruiter.RecruiterFacade;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin
@RestController
@AllArgsConstructor
public class LoginController {

    private  final  HeadRecruiterFacade headRecruiterFacade;
    private  final RecruiterFacade recruiterFacade;
    private  final AdminFacade adminFacade;

    @GetMapping(path = "/login")
    public String loginSuccessful(Principal principal){
        String name = principal.getName();
        Object user;
        user =  headRecruiterFacade.findByName(name);
         if(user == null){
            try {
                user = recruiterFacade.findByName(name);
            }
            catch(NullPointerException e){
                e.printStackTrace();
            }
        }
         if(user == null){
             user= adminFacade.findByName(name);
         }
        if(user instanceof HeadRecruiter)
        {
            return "head";
        }
        else if(user instanceof Admin)
        {
            return "admin";
        }
        else
            return "recruiter";
    }
}

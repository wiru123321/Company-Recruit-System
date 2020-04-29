package com.polsl.proj.recruitmentsystem;

import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.services.AdminFacade;
import com.polsl.proj.recruitmentsystem.business.services.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.services.RecruiterFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(origins = { "http://localhost:3000","http://localhost:4200" })
@RestController
public class LoginController {

    @Autowired
    HeadRecruiterFacade headRecruiterFacade;
    @Autowired
    RecruiterFacade recruiterFacade;
    @Autowired
    AdminFacade adminFacade;

    @GetMapping(path = "/login")
    public String loginSuccessful(Principal principal){
        String name = principal.getName();
        Object user;
        user =  headRecruiterFacade.findByName(name);
         if(user == null){
            user= recruiterFacade.findByName(name);
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

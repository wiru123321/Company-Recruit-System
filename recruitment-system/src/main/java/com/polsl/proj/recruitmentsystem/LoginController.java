package com.polsl.proj.recruitmentsystem;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin(origins = { "http://localhost:3000","http://localhost:4200" })
@RestController
public class LoginController {

    @GetMapping(path = "/login")
    public String loginSuccessful(Principal principal){
        String name = principal.getName();
        if(name.equals("testowy"))
        {
            return "head";
        }
        else
            return "recruiter";
    }
}

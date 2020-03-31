package com.polsl.proj.recruitmentsystem.Security;


import com.polsl.proj.recruitmentsystem.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.model.people.Recruiter;
import com.polsl.proj.recruitmentsystem.repositories.people.HeadRecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    RecruiterRepository recruiterRepository;
    @Autowired
    HeadRecruiterRepository headRecruiterRepository;

    @Override
    public UserDetails loadUserByUsername(String firstName) throws UsernameNotFoundException {
        Optional<Recruiter> user = recruiterRepository.findByFirstName(firstName);
        if(!user.isPresent()){
            Optional<HeadRecruiter> headUser =  headRecruiterRepository.findByFirstName(firstName);
            return headUser.map(CustomUserDetails::new).get();
        }

        return user.map(CustomUserDetails::new).get();

    }
}

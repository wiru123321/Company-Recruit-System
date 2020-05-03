package com.polsl.proj.recruitmentsystem.Security;


import com.polsl.proj.recruitmentsystem.business.model.people.Admin;
import com.polsl.proj.recruitmentsystem.business.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.business.model.people.Recruiter;
import com.polsl.proj.recruitmentsystem.repositories.people.AdminRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.HeadRecruiterRepository;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruiterRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {


   private final RecruiterRepository recruiterRepository;
   private final AdminRepository adminRepository;
   private final HeadRecruiterRepository headRecruiterRepository;

    @Override
    public UserDetails loadUserByUsername(String firstName) throws UsernameNotFoundException {
        Optional<Recruiter> user = recruiterRepository.findByFirstName(firstName);
        if(!user.isPresent()){
            Optional<HeadRecruiter> headUser = null;
          try {
              headUser  = headRecruiterRepository.findByFirstName(firstName);
          }catch (Exception e){
              e.printStackTrace();
          }
            if(!headUser.isPresent()){
                Optional<Admin> admin =  adminRepository.findByFirstName(firstName);
                return admin.map(CustomUserDetails::new).get();
            }
            return headUser.map(CustomUserDetails::new).get();
        }


        return user.map(CustomUserDetails::new).get();

    }
}

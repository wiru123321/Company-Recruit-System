package com.polsl.proj.recruitmentsystem.Security;


import com.polsl.proj.recruitmentsystem.model.Recruiter;
import com.polsl.proj.recruitmentsystem.repositories.RecruiterRepository;
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

    @Override
    public UserDetails loadUserByUsername(String firstName) throws UsernameNotFoundException {
        Optional<Recruiter> user = recruiterRepository.findByFirstName(firstName);

        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + firstName));

        return user.map(CustomUserDetails::new).get();
    }
}

package com.polsl.proj.recruitmentsystem.service;

import com.polsl.proj.recruitmentsystem.model.Recruiter;

import java.util.Collection;
import java.util.List;

public interface RecruiterService {

    Collection<Recruiter> findAll();

    Recruiter findById(Long id);

    List<Recruiter> findByFirstName(String firstName);

    List<Recruiter> findBySecondNameTEMPCHANGE5(String secondName);

    Recruiter save(Recruiter recruiter);

    Recruiter update(Recruiter recruiter);

    Recruiter deleteById(Long id);

}

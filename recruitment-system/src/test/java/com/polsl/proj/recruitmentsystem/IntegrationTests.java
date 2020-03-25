package com.polsl.proj.recruitmentsystem;


import com.polsl.proj.recruitmentsystem.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.model.recruitAttributes.Training;
import com.polsl.proj.recruitmentsystem.repositories.people.RecruitRepository;

import com.polsl.proj.recruitmentsystem.repositories.recruitAttibutes.TrainingRepository;
import org.junit.Assert;
import org.junit.Before;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class IntegrationTests  {

    @Autowired
    RecruitRepository recruitRepository;

    @Autowired
    TrainingRepository trainingRepository;

   /* @Test
    public void givenUsersInDB_WhenUpdateStatusForNameModifyingQueryAnnotationNative_ThenModifyMatchingUsers(){
        int updatedUsersSize = recruitRepository.updateLastNameForFirstName("Rekrut", "Zmodyfikowany");
        Assert.assertEquals(updatedUsersSize,2);
    }

    @Before
    public void insertRecruts() {
        recruitRepository.save(new Recruit(0L, "TestowyRekrut", "TestowyNazwisko"));
        recruitRepository.save(new Recruit(1L, "Rekrut", "Puste"));
        recruitRepository.save(new Recruit(2L, "Rekrut", "---"));
        recruitRepository.save(new Recruit(3L, "Tomek", "Rekrutowany"));
        recruitRepository.flush();
    }*/


    @Before
    public void insertTraining() {
        trainingRepository.save(new Training( 1L, "TestoweSzkolenie", "TestowyOpis",null));
        trainingRepository.flush();
    }


    @Test
    public void TrainingRepositoryntegrationTest(){
        List<Training> all = trainingRepository.findAll();
        Training result = trainingRepository.getByTrainingId(1L);
        Assert.assertEquals(result.getName(),"TestoweSzkolenie");
    }



}
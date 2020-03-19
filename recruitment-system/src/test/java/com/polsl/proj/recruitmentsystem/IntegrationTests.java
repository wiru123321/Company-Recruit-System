package com.polsl.proj.recruitmentsystem;


import com.polsl.proj.recruitmentsystem.model.Recruit;
import com.polsl.proj.recruitmentsystem.repositories.RecruitRepository;

import org.junit.Assert;
import org.junit.Before;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class IntegrationTests  {

    @Autowired
    RecruitRepository recruitRepository;

    @Test
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
    }
}
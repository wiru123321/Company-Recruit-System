package com.polsl.proj.recruitmentsystem;


import com.polsl.proj.recruitmentsystem.business.model.people.Recruit;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.Training;
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
public class RecruitRepositoryTests {

    @Autowired
    RecruitRepository recruitRepository;

    @Autowired
    TrainingRepository trainingRepository;

    @Before
    public void init() {
   /* Recruit testowy = new Recruit(1L,"TestowyRekrut","TestowyNazwisko",null,null,null);
      Recruit testowy2 = new Recruit(2L,"TestowyRekrut2","TestowyNazwisko3",null,null,null,new LinkedList<Training>());
      Recruit testowy3 = new Recruit(3L,"TestowyRekrut3","TestowyNazwisko2",null,null,null,new LinkedList<Training>());
      Recruit testowy3 = new Recruit(1L,"TestowyRekrut3","TestowyNazwisko2",new LinkedList<Education>(),new LinkedList<Skill>(),new LinkedList<Training>());
      Training training = new Training(101L,"SzkolenieTestowe","OpisTestowy",null,null);
      testowy.addTraining(training);
      training.setRecruit(testowy);

      recruitRepository.save(testowy3);
      recruitRepository.save(testowy2);
      recruitRepository.save(testowy3);
    */
    }

    @Test
    public void should_ReturnThreeRecruits_When_AllRecuitsRequested() {
        List<Recruit> result = recruitRepository.findAll();
        Assert.assertEquals(3L, result.size());
    }

    @Test
    public void should_ReturnOneTraining_When_SearchedByRecruitWithTraining() {
        Recruit searched = recruitRepository.findById(1L);
        Training result = trainingRepository.getTrainingByRecruit(searched);
        Assert.assertNotNull(result);
    }


}

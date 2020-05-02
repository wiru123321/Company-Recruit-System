package com.polsl.proj.recruitmentsystem;


import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;

@Component
@AllArgsConstructor
public class BeanInitializer {
    private EntityManager entityManager;

    @Bean
    public CriteriaBuilder create(){
        return entityManager.getCriteriaBuilder();
    }
}

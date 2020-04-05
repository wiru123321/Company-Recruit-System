package com.polsl.proj.recruitmentsystem.business.services;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.recruitmentParams.JobApplication;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.LinkedList;
import java.util.List;

@Service
@AllArgsConstructor
class HeadRecruiterService {

    private final EntityManager entityManager;

    List<JobApplication> getFilteredJobApplications(SearchParametersDTO dto) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<JobApplication> query = builder.createQuery(JobApplication.class);
        Root<JobApplication> root = query.from(JobApplication.class);
        Predicate hasPosition,hasStatus,hasResult, hasRate;
        List<Predicate> predicates = new LinkedList<>();
        if (dto.getPosition() != null) {                        //TODO refactor if
            hasPosition = builder.equal(root.get("position"), dto.getPosition());
            predicates.add(hasPosition);
        }
        if (dto.getStatus() != null) {
            hasStatus = builder.equal(root.get("status"), dto.getStatus());
            predicates.add(hasStatus);
        }
        if (dto.getResult() != null) {
            hasResult = builder.equal(root.get("result"), dto.getResult());
            predicates.add(hasResult);
        }
        if (dto.getRate() != null) {
            hasRate = builder.equal(root.get("rate"), dto.getRate());
            predicates.add(hasRate);
        }
        Predicate last = builder.and(predicates.toArray(new Predicate[0]));
        query.where(last);
        return entityManager.createQuery(query.select(root)).getResultList();
    }
}

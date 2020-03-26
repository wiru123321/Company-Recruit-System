package com.polsl.proj.recruitmentsystem.model.recruitmentParams;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Rate {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long rateId;
private String rate;


}

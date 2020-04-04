package com.polsl.proj.recruitmentsystem.model.DTO.POJOs;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SkillPOJO {

    @JsonProperty
    private String skillName;
    @JsonProperty
    private String skillLevel;

}

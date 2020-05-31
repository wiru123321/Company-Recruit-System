package com.polsl.proj.recruitmentsystem.business.model.wrappers;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DepartmentsWrapper {
    private List<String> departments;

    public DepartmentsWrapper(List<String> departments) {
        this.departments = departments;
    }
}

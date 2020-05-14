package com.polsl.proj.recruitmentsystem.controllers;

import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.EmployeeDTO;
import com.polsl.proj.recruitmentsystem.business.model.wrappers.EmployeesWrapper;
import com.polsl.proj.recruitmentsystem.business.services.admin.AdminFacade;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
@AllArgsConstructor
public class AdminController {
    private final AdminFacade adminFacade;

    @GetMapping("/hi")
    @ResponseBody
    public String hi(){
        return "hi";
    }


    @PostMapping("/addEmployee")
    public void addNewEmployee(@RequestBody EmployeeDTO dto) {
        adminFacade.addNewInternalEmployee(dto);
    }

    @GetMapping("/getAllEmployees")
    public EmployeesWrapper getAllEmployees() {
        return adminFacade.getAllEmployees();
    }

    @DeleteMapping("deleteEmployee/{firstname}")
    public void deleteEmployee(@PathVariable(name = "firstname") String firstname){
        adminFacade.deleteEmployee(firstname);
    }
}

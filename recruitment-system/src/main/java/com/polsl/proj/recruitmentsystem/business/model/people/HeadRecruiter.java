package com.polsl.proj.recruitmentsystem.business.model.people;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
public class HeadRecruiter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private String password;
    @NonNull
    private boolean active;
    @NonNull
    private String roles;
    @NonNull
    private String department;

    public HeadRecruiter(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public boolean isActive() {
        return active;
    }

    public String getRoles() {
        return roles;
    }

    public String getDepartment() { return department; }
}

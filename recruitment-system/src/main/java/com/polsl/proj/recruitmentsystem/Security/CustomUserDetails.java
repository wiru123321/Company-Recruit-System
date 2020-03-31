package com.polsl.proj.recruitmentsystem.Security;

import com.polsl.proj.recruitmentsystem.model.people.HeadRecruiter;
import com.polsl.proj.recruitmentsystem.model.people.Recruiter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
public class CustomUserDetails implements UserDetails {

    private String firstName;
    private String password;
    private boolean active;
    private List<GrantedAuthority> authorities;

     CustomUserDetails(Recruiter user) {
        this.firstName = user.getFirstName();
        this.password = user.getPassword();
        this.active = user.isActive();
        this.authorities = Arrays.stream(user.getRoles().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    CustomUserDetails(HeadRecruiter headUser) {             // TODO: Refactor Liskov
        this.firstName = headUser.getFirstName();
        this.password = headUser.getPassword();
        this.active = headUser.isActive();
        this.authorities = Arrays.stream(headUser.getRoles().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return firstName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}

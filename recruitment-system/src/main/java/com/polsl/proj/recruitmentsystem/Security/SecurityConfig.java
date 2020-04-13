package com.polsl.proj.recruitmentsystem.Security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.authentication.AuthenticationManagerBeanDefinitionParser;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Qualifier("customUserDetailsService")
    @Autowired
    UserDetailsService userDetailsService;

    private static final String[] WHITELIST = {
            "/js/**",
            "/css/**",
            "/images/**",
            "/webjars/**",
            "/favicon",
            "/register"
    };

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }


    //TODO: Usuwanie cookies
    //TODO: Remember me
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/admin/*").permitAll()//.hasRole("ADMIN")
                .antMatchers("/head/*").permitAll()//.hasAnyRole("USER","HEAD","ADMIN")
                .antMatchers("/recruiter/*").permitAll()//.hasAnyRole("ADMIN", "USER")
                .antMatchers("/").permitAll()//.permitAll()
                .antMatchers(WHITELIST).permitAll()
                .and().formLogin();
        http.csrf().disable();      // WYMAGANE DLA POSTMAN / INSOMNIA
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    //TODO: Kodowanie haseł wprowadzanych do bazy danych
    //TODO: REGEX haseł
}
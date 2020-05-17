package com.polsl.proj.recruitmentsystem.Security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.authentication.AuthenticationManagerBeanDefinitionParser;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@Configuration
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
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers("/recruiter/*").hasRole("RECRUITER")//.hasAnyRole("USER","HEAD","ADMIN")
                .antMatchers("/head/*").hasRole("HEAD")//.hasAnyRole("USER","HEAD","ADMIN")
                .antMatchers("/admin/*").hasRole("ADMIN")//.hasAnyRole("USER","HEAD","ADMIN")
                .and()
                .httpBasic();
              /*  .antMatchers("/admin/*").permitAll()//.hasRole("ADMIN")
                .antMatchers("/head/*").permitAll()//.hasAnyRole("USER","HEAD","ADMIN")
                .antMatchers("/recruiter/*").permitAll()//.hasAnyRole("ADMIN", "USER")
                .antMatchers("/").permitAll()//.permitAll()
                .antMatchers(WHITELIST).permitAll()
                .and().formLogin();*/
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    //TODO: Kodowanie haseł wprowadzanych do bazy danych
    //TODO: REGEX haseł
}
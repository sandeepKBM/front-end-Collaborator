package com.learn.security;

import com.learn.security.model.Role;
import com.learn.security.model.User;
import com.learn.security.service.userServiceImpl;
import com.learn.security.service.userServiceInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class SecurityApplication {



    public static void main(String[] args) {
        SpringApplication.run(SecurityApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(userServiceInterface userService){
        return args -> {
            userService.saveUser(new User(null,"sandeep","sandeep","sandeep",new ArrayList<>()));
            userService.saveRole(new Role(null,"USER"));
            userService.addRoleToUser("sandeep","USER");
        };
    }

}

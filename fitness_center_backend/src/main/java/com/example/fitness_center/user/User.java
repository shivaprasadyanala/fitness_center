package com.example.fitness_center.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Data
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private String Gender;
    private Integer contactNumber;
    private String confirmPassword;
    private String password;
    private Integer age;

}

//{
//        "name":"ramu",
//        "email":"ramu@gmail.com",
//        "gender":"male",
//        "contactNumber":232344432,
//        "password":"test",
//        "confirmPassword":"test",
//        "age":15
//        }

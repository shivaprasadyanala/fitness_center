package com.example.fitness_center.cart;

import com.example.fitness_center.user.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@Data
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cid;
    private String serviceName;
    private String servicePrice;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}

//        {
//        "serviceName":"swimming",
//        "servicePrice":1600,
//        "user_id":2
//
//        }

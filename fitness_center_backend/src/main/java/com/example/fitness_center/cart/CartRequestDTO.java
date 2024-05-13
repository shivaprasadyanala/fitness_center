package com.example.fitness_center.cart;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartRequestDTO {
    public String serviceName;
    public String servicePrice;
    public int user_id;
}

package com.example.fitness_center.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface CartRepository extends JpaRepository<Cart,Integer> {
    @Query("select c from Cart c where c.serviceName = ?1")
    List<Cart> findByCart(String serviceName);
}

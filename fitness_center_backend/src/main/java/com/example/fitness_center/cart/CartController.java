package com.example.fitness_center.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;
    @CrossOrigin(origins = "*")
        @PostMapping("/addcartitem")
    public boolean postCart(@RequestBody CartRequestDTO request){
        cartService.addCartItem(request);
        return true;
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/deletecartitem")
    public boolean deleteCart(@RequestBody CartDeleteDTO request){
        return cartService.deleteCartItem(request);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/getservices/{id}")
    public List<String> getServices(@PathVariable("id") int id){
        return cartService.getAllServices(id);

    }
}

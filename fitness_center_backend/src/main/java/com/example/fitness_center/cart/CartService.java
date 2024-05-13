package com.example.fitness_center.cart;

import com.example.fitness_center.user.User;
import com.example.fitness_center.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    public void addCartItem(CartRequestDTO request) {
        Cart cart = new Cart();
        int user_id = request.getUser_id();
        System.out.println(request);
        Optional<User> user = userRepository.findById(user_id);
        User user_object = null;
        if (user.isPresent()) {
            user_object = user.get();
        }
        cart.setServicePrice(request.getServicePrice());
        cart.setServiceName(request.getServiceName());
        cart.setUser(user_object);
        cartRepository.save(cart);
    }

    public Boolean deleteCartItem(CartDeleteDTO req) {
        String service_name = req.serviceName;
        List<Cart> carts = cartRepository.findByCart(service_name);
        for (Cart cart : carts) {
            cartRepository.delete(cart);
        }
        return true;
    }

    public ArrayList<String> getAllServices(int user_id) {
        List<Cart> services = cartRepository.findAll();
        ArrayList<String> cartItems = new ArrayList<>();
        for (Cart service : services) {
            User user = service.getUser();
            System.out.println(user);
            if (user.getId() == user_id) {
                cartItems.add(service.getServiceName());
            }
        }
        return cartItems;
    }
}

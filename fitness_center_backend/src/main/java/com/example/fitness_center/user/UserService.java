package com.example.fitness_center.user;

import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.RequiredArgsConstructor;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    public final UserRepository userRepository;
    public boolean addUser(User request){
        User User = new User();
        System.out.println(request.getContactNumber());
        System.out.println(request.getConfirmPassword());
        User.setAge(request.getAge());
        User.setEmail(request.getEmail());
        User.setName(request.getName());
        User.setGender(request.getGender());
        User.setContactNumber(request.getContactNumber());
        User.setPassword(request.getPassword());
        User.setConfirmPassword(request.getConfirmPassword());
        userRepository.save(User);
        return true;
    }

    public boolean userLogin(LoginUserDto data) {
        User user=userRepository.findByEmail(data.getEmail());
        System.out.println(data.getEmail());
        System.out.println(data.getPassword());
        if(user != null){
            String password = data.getPassword();
            System.out.println(user.getPassword().equals(password));
            return user.getPassword().equals(password);
        }
        return false;
    }
}

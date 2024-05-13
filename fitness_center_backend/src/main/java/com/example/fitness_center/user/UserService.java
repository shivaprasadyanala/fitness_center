package com.example.fitness_center.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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

    public UserResponseDTO userLogin(LoginUserDto data) {
        User user=userRepository.findByEmail(data.getEmail());
        System.out.println(data.getEmail());
        System.out.println(data.getPassword());
        Long userid;
        boolean isUserLoggedIn;
        UserResponseDTO userResponse = new UserResponseDTO();
        userResponse.setIsLoggedIn(false);
        if(user != null){
            String password = data.getPassword();
            System.out.println(user.getPassword().equals(password));
            isUserLoggedIn =  user.getPassword().equals(password);
            userid = user.getId();
            userResponse.setUserid(userid);
            userResponse.setIsLoggedIn(isUserLoggedIn);
            return userResponse;
        }
        return userResponse;
    }
}

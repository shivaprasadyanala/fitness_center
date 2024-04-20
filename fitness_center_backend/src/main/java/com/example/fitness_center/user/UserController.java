package com.example.fitness_center.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping("/user")
    public String getUser(){
        System.out.println("hello");
        return "hello";
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/postuser")
    public boolean postUser(@RequestBody User request){
        return userService.addUser(request);
    }
    @CrossOrigin(origins = "*")
    @PostMapping(path= "/loginuser" ,consumes = "application/json", produces = "application/json")
    public boolean loginUser(@RequestBody LoginUserDto data) {
        return userService.userLogin(data);

    }
}

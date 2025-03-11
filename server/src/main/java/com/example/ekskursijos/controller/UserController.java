package com.example.ekskursijos.controller;

import com.example.ekskursijos.dto.user.LoginUserRequest;
import com.example.ekskursijos.dto.user.UserMapper;
import com.example.ekskursijos.dto.user.CreateUserRequest;
import com.example.ekskursijos.dto.user.UserResponse;
import com.example.ekskursijos.model.User;
import com.example.ekskursijos.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

  private final UserService userService;
  private final UserMapper userMapper;

  @Autowired
  public UserController(UserService userService, UserMapper userMapper) {
    this.userService = userService;
    this.userMapper = userMapper;
  }

  @GetMapping("/users")
  public ResponseEntity<List<UserResponse>> getUsers() {
    List<User> users = userService.getUsers();
    List<UserResponse> userResponse = userMapper.toUserResponses(users);
    return ResponseEntity.ok().body(userResponse);
  }

  @PostMapping("/register")
  public ResponseEntity<UserResponse> saveUser(@Valid @RequestBody CreateUserRequest userRequest) {
    User newUser = userService.saveUser(userRequest);
    UserResponse userResponse = userMapper.toUserResponse(newUser);
    return ResponseEntity.created(
                    ServletUriComponentsBuilder.fromCurrentRequest()
                            .path("/{id}")
                            .buildAndExpand(userResponse.id())
                            .toUri())
            .body(userResponse);
  }

  @PostMapping("/login")
  public ResponseEntity<Map<String, String>> loginUser(@Valid @RequestBody LoginUserRequest userRequest) {
    return ResponseEntity.ok(userService.loginUser(userRequest));
  }
}

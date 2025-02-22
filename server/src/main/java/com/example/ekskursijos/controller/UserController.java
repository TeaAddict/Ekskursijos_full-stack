package com.example.ekskursijos.controller;

import com.example.ekskursijos.dto.UserMapper;
import com.example.ekskursijos.dto.UserResponseDTO;
import com.example.ekskursijos.model.User;
import com.example.ekskursijos.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/users")
  public ResponseEntity<List<UserResponseDTO>> getUsers() {
    List<User> users = userService.getUsers();
    List<UserResponseDTO> userResponseDTO = UserMapper.toUserResponseDTOS(users);
    
    return ResponseEntity.ok().body(userResponseDTO);
  }
}

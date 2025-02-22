package com.example.ekskursijos.dto;

import com.example.ekskursijos.model.User;

import java.util.List;

public class UserMapper {

  public static UserResponseDTO toUserResponseDTO(User user) {
    return new UserResponseDTO(
            user.getId(),
            user.getUsername()
    );
  }

  public static List<UserResponseDTO> toUserResponseDTOS(List<User> users) {
    return users.stream().map(UserMapper::toUserResponseDTO).toList();
  }

}

package com.example.ekskursijos.dto.user;

import com.example.ekskursijos.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserMapper {

  public User toUser(CreateUserRequest createUserRequest) {
    User user = new User();
    user.setEmail(createUserRequest.email());
    user.setUsername(createUserRequest.username());
    user.setPassword(createUserRequest.password());
    return user;
  }

  public User toUser(LoginUserRequest createUserRequest) {
    User user = new User();
    user.setEmail(createUserRequest.email());
    user.setPassword(createUserRequest.password());
    return user;
  }

  public UserResponse toUserResponse(User user) {
    return new UserResponse(
            user.getId(),
            user.getEmail(),
            user.getUsername()
    );
  }

  public List<UserResponse> toUserResponses(List<User> users) {
    return users.stream().map(this::toUserResponse).toList();
  }

}

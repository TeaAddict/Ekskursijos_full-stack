package com.example.ekskursijos.service;

import com.example.ekskursijos.dto.user.LoginUserRequest;
import com.example.ekskursijos.dto.user.UserMapper;
import com.example.ekskursijos.dto.user.CreateUserRequest;
import com.example.ekskursijos.exception.CredentialsInvalidException;
import com.example.ekskursijos.exception.EmailAlreadyExistsException;
import com.example.ekskursijos.exception.UserDoesNotExistsException;
import com.example.ekskursijos.exception.UsernameAlreadyExistsException;
import com.example.ekskursijos.model.Role;
import com.example.ekskursijos.model.User;
import com.example.ekskursijos.repository.RoleRepository;
import com.example.ekskursijos.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

  private final TokenService tokenService;
  private final UserRepository userRepository;
  private final RoleRepository roleRepository;
  private final UserMapper userMapper;
  private final PasswordEncoder passwordEncoder;

  @Autowired
  public UserService(TokenService tokenService, UserRepository userRepository, RoleRepository roleRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
    this.tokenService = tokenService;
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.userMapper = userMapper;
    this.passwordEncoder = passwordEncoder;
  }

  public List<User> getUsers() {
    return userRepository.findAll();
  }

  public Optional<User> findByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  public User saveUser(CreateUserRequest createUserRequest) {
    User user = userMapper.toUser(createUserRequest);

    if (userRepository.existsByEmail(createUserRequest.email())) {
      throw new EmailAlreadyExistsException("Email already exists.");
    }

    if (userRepository.existsByUsername(createUserRequest.username())) {
      throw new UsernameAlreadyExistsException("Username already exists.");
    }

    Role roleUser = roleRepository.findByName("USER").orElseThrow();
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setRoles(Set.of(roleUser));

    return userRepository.save(user);
  }

  public Map<String, String> loginUser(LoginUserRequest loginUserRequest) {

    Optional<User> user = userRepository.findByEmail(loginUserRequest.email());

    if (user.isEmpty()) {
      throw new CredentialsInvalidException("Invalid credentials");
    }

    if (!passwordEncoder.matches(loginUserRequest.password(), user.get().getPassword())) {
      throw new CredentialsInvalidException("Invalid credentials");
    }

    return Map.of("token", tokenService.generateToken(user.get()));
  }
}

package com.example.ekskursijos.security;

import com.example.ekskursijos.model.User;
import com.example.ekskursijos.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  private final UserRepository userRepository;

  public UserDetailsServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }


  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    return org.springframework.security.core.userdetails.User
            .withUsername(user.getUsername())
            .password(user.getPassword())
            .authorities(user.getRoles().toArray(new String[0]))
            .build();
  }

  //  private final UserService userService;
//
//  @Autowired
//  public UserDetailsServiceImpl(UserService userService) {
//    this.userService = userService;
//  }

//  @Override
//  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//    Optional<User> foundUser = userService.findByUsername(username);
//
//    if (foundUser.isEmpty()) {
//      throw new UsernameNotFoundException(username);
//    }
//
//    return foundUser.get();
//  }

}
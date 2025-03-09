package com.example.ekskursijos.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(nullable = false, length = 50, unique = true)
  private String name;

  public Role(String name) {
    this.name = name;
  }

  public Role() {
  }
  
}

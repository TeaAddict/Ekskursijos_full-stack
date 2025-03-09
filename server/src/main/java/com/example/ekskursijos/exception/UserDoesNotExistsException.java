package com.example.ekskursijos.exception;

public class UserDoesNotExistsException extends RuntimeException {
  public UserDoesNotExistsException(String message) {
    super(message);
  }
}

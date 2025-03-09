package com.example.ekskursijos.controller;

import com.example.ekskursijos.model.Event;
import com.example.ekskursijos.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EventController {

  private final EventService eventService;

  @Autowired
  public EventController(EventService eventService) {
    this.eventService = eventService;
  }

  @GetMapping("/events")
  public ResponseEntity<List<Event>> getEvents() {
    List<Event> events = eventService.findAllEvents();

    return ResponseEntity.ok(events);
  }

}

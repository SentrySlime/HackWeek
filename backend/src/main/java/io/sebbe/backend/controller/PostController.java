package io.sebbe.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PostController {

  @GetMapping
  public ResponseEntity<String> getPost(){
    return ResponseEntity.ok("hey");
  }

  

}

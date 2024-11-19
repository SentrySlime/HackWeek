package io.sebbe.backend.controller;

import io.sebbe.backend.model.Post;
import io.sebbe.backend.service.PostService;
import org.springframework.boot.autoconfigure.task.TaskExecutionProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

@RestController
@RequestMapping("/api")
public class PostController {

  private final TaskExecutionProperties taskExecutionProperties;
  PostService postService;

  public PostController(PostService postService, TaskExecutionProperties taskExecutionProperties) {
    this.postService = postService;
    this.taskExecutionProperties = taskExecutionProperties;
  }

  @GetMapping
  public ResponseEntity<String> getPost(){
    return ResponseEntity.ok(postService.getPost());
  }

//  @PostMapping("/add")
//  public ResponseEntity<String> takePost(@RequestParam("image") MultipartFile file) {
//    try {
//      String fileUrl = s3Service.uploadFile(file);
//      return ResponseEntity.ok(fileUrl);
//    } catch (Exception e) {
//      return ResponseEntity.status(500).body("Error uploading file: " + e.getMessage());
//    }
//  }


}

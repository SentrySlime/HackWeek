package io.sebbe.backend.controller;

import io.sebbe.backend.dto.UploadRequestDTO;
import io.sebbe.backend.model.CloudPost;
import io.sebbe.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {


  @Autowired
  private PostService imageUploadService;

  @PostMapping("/upload")
  public ResponseEntity<Map> uploadImage(@ModelAttribute UploadRequestDTO uploadRequest) {
    try {

      CloudPost cloudPost = new CloudPost(uploadRequest.title(), uploadRequest.image());

      Map uploadResult = imageUploadService.uploadImage(cloudPost);

      System.out.println(uploadResult);
      return ResponseEntity.ok(uploadResult);
    } catch (IOException e) {
      return ResponseEntity.status(500).body(null);
    }
  }





  PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;

  }



//  @GetMapping
//  public ResponseEntity<String> getPost(){
//    return ResponseEntity.ok(postService.getPost());
//  }

//  @PostMapping("/add")
//  public ResponseEntity<String> takePost(@RequestParam("image") MultipartFile file) {
//    try {
//      String fileUrl = postService.uploadFile(file);
//      return ResponseEntity.ok(fileUrl);
//    } catch (Exception e) {
//      return ResponseEntity.status(500).body("Error uploading file: " + e.getMessage());
//    }
//  }


}

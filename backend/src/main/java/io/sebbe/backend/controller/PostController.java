package io.sebbe.backend.controller;

import io.sebbe.backend.dto.PostResponseDTO;
import io.sebbe.backend.dto.UploadRequestDTO;
import io.sebbe.backend.model.CloudPost;
import io.sebbe.backend.service.PostService;
import io.sebbe.backend.util.PostMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {



  private PostService service;
  private PostMapper postMapper;

  public PostController(PostService service, PostMapper postMapper ) {
    this.service = service;
    this.postMapper = postMapper;
  }

  @PostMapping("/upload")
  public ResponseEntity<Map> uploadImage(@ModelAttribute UploadRequestDTO uploadRequest) {
    try {

      CloudPost cloudPost = new CloudPost(uploadRequest.title(), uploadRequest.image());

      Map uploadResult = service.uploadImage(cloudPost);

      System.out.println(uploadResult);
      return ResponseEntity.ok(uploadResult);
    } catch (IOException e) {
      return ResponseEntity.status(500).body(null);
    }
  }

  @GetMapping
  public ResponseEntity<List <PostResponseDTO>> getAllPosts(){
    List<PostResponseDTO> list = postMapper.mapToDtoList(service.getPosts());
    return ResponseEntity.ok(list);
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

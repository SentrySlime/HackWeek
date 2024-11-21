package io.sebbe.backend.controller;

import io.sebbe.backend.dto.PostResponseDTO;
import io.sebbe.backend.dto.UploadRequestDTO;
import io.sebbe.backend.model.CloudPost;
import io.sebbe.backend.model.Post;
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


  private final PostService postService;
  private PostService service;
  private PostMapper postMapper;

  public PostController(PostService service, PostMapper postMapper, PostService postService) {
    this.service = service;
    this.postMapper = postMapper;
    this.postService = postService;
  }

  @PostMapping
  public ResponseEntity<Map> uploadImage(@ModelAttribute UploadRequestDTO uploadRequest) {
    try {

      CloudPost cloudPost = new CloudPost(uploadRequest.title(), uploadRequest.image(), uploadRequest.categories());

      Map uploadResult = service.uploadImage(cloudPost);

      System.out.println(uploadResult);
      return ResponseEntity.ok(uploadResult);
    } catch (IOException e) {
      return ResponseEntity.status(500).body(null);
    }
  }

  @GetMapping
  public ResponseEntity<List <PostResponseDTO>> getAllPosts(){
    List<Post> posts = service.getPosts();
    List<PostResponseDTO> responseDTOs = PostMapper.toResponseDTOList(posts);
    return ResponseEntity.ok(responseDTOs);
  }

  @DeleteMapping("/{id}")
  public void deletePostById(@PathVariable Integer id) throws IOException {
    postService.deletePostById(id);
  }

}

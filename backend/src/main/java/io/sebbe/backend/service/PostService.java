package io.sebbe.backend.service;

import io.sebbe.backend.repository.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {

  PostRepository postRepository;

  public PostService(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  public String getPost() {

    postRepository.findById(1L);

    return "SomeString";
  }

}
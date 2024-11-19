package io.sebbe.backend.util;

import io.sebbe.backend.dto.PostResponseDTO;
import io.sebbe.backend.model.Post;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PostMapper {


  public static PostResponseDTO mapToDto(Post post) {
    return new PostResponseDTO(post.getId(), post.getTitle(), post.getUrl());
  }


  public static List<PostResponseDTO> mapToDtoList(List<Post> posts) {
    return posts.stream()
            .map(PostMapper::mapToDto) // Use the mapping function for each Post
            .collect(Collectors.toList()); // Collect the results into a List
  }
}

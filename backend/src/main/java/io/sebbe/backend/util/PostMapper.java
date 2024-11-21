package io.sebbe.backend.util;

import io.sebbe.backend.dto.PostResponseDTO;
import io.sebbe.backend.model.Category;
import io.sebbe.backend.model.CloudPost;
import io.sebbe.backend.model.Post;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PostMapper {


//  public static PostResponseDTO mapToDto(Post post) {
//    return new PostResponseDTO(post.getId(), post.getTitle(), post.getUrl());
//  }
//
//
//  public static List<PostResponseDTO> mapToDtoList(List<Post> posts) {
//    return posts.stream()
//            .map(PostMapper::mapToDto) // Use the mapping function for each Post
//            .collect(Collectors.toList()); // Collect the results into a List
//  }




  public static Post mapToPost(CloudPost cloudPost, List<Category> allCategories, String uploadedUrl, String imageId) {
    // Map the title
    String title = cloudPost.getTitle();

    // Map the URL and image ID from the file upload process
    String url = uploadedUrl;  // This is assumed to be the URL of the uploaded file
    String imgId = imageId;    // The identifier for the uploaded image (if applicable)

    // Map categories by finding matches in the existing categories
    List<Category> categories = cloudPost.getCategories()
            .stream()
            .map(categoryName -> findOrCreateCategory(allCategories, categoryName))
            .collect(Collectors.toList());

    // Return a new Post instance
    return new Post(title, url, imgId, categories);
  }

  private static Category findOrCreateCategory(List<Category> allCategories, String categoryName) {
    // Search for an existing category
    return allCategories.stream()
            .filter(category -> category.getName().equalsIgnoreCase(categoryName))
            .findFirst()
            .orElse(new Category(categoryName)); // Create a new Category if not found
  }


  public static PostResponseDTO toResponseDTO(Post post) {
    return new PostResponseDTO(
            post.getId(),
            post.getTitle(),
            post.getUrl(),
            post.getCategories().stream()
                    .map(Category::getName) // Extract category names
                    .collect(Collectors.toList())
    );
  }

  public static List<PostResponseDTO> toResponseDTOList(List<Post> posts) {
    return posts.stream()
            .map(PostMapper::toResponseDTO) // Map each Post to PostResponseDTO
            .collect(Collectors.toList());
  }

}

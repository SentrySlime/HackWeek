package io.sebbe.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import io.sebbe.backend.model.Category;
import io.sebbe.backend.model.CloudPost;
import io.sebbe.backend.model.Post;
import io.sebbe.backend.repository.CategoryRepository;
import io.sebbe.backend.repository.PostRepository;
import io.sebbe.backend.util.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PostService {

  private Cloudinary cloudinary;
  private PostRepository postRepo;
  private PostMapper postMapper;
  private CategoryRepository categoryRepository;


  public PostService(CategoryRepository categoryRepository, PostMapper postMapper, PostRepository postRepo, Cloudinary cloudinary) {
    this.categoryRepository = categoryRepository;
    this.postMapper = postMapper;
    this.postRepo = postRepo;
    this.cloudinary = cloudinary;
  }

  //Post
  public Map uploadImage(CloudPost cloudPost) throws IOException {
    // Step 1: Upload file to Cloudinary
    File file = convertToFile(cloudPost.getFile());
    Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
    file.delete();

    // Step 2: Ensure all categories in `cloudPost` are persisted
    List<Category> categories = cloudPost.getCategories().stream()
            .map(categoryName -> categoryRepository.findByName(categoryName)
                    .orElseGet(() -> {
                      // Create and save new category if it doesn't exist
                      Category newCategory = new Category(categoryName);
                      return categoryRepository.save(newCategory);
                    })
            )
            .collect(Collectors.toList());

    // Step 3: Map CloudPost to Post, including the uploaded file's URL and public ID
    Post post = new Post(
            cloudPost.getTitle(),
            (String) uploadResult.get("secure_url"),  // Secure URL from Cloudinary
            (String) uploadResult.get("public_id"),  // Public ID from Cloudinary
            categories
    );

    // Step 4: Save the Post to the database
    storeInDB(post);

    // Step 5: Return the upload result
    return uploadResult;
  }



  //Get
  public List<Post> getPosts(){
    return postRepo.findAll();
  }

  //Delete
  public void deletePostById(int id) throws IOException {

    Post post = postRepo.findById((long) id).orElse(null);

    cloudinary.uploader().destroy(post.getImg_Id(), ObjectUtils.emptyMap());
    postRepo.deleteById((long) id);
  }

  private File convertToFile(MultipartFile multipartFile) throws IOException {
    File file = new File(multipartFile.getOriginalFilename());
    try (FileOutputStream fos = new FileOutputStream(file)) {
      fos.write(multipartFile.getBytes());
    }
    return file;
  }


  private void storeInDB (Post post) {
    postRepo.save(post);
  }
}
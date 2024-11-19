package io.sebbe.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import io.sebbe.backend.model.CloudPost;
import io.sebbe.backend.model.Post;
import io.sebbe.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class PostService {

  @Autowired
  private Cloudinary cloudinary;

  @Autowired
  private PostRepository postRepo;

  //Post
  public Map uploadImage(CloudPost cloudPost) throws IOException {
    File file = convertToFile(cloudPost.getFile());
    Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());

    file.delete();

    mapToPost(uploadResult, cloudPost);
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

  private void mapToPost (Map uploadResult, CloudPost cloudPost) {


    String publicId = (String) uploadResult.get("public_id");


    Post post = new Post(cloudPost.getTitle(),
            (String) uploadResult.get("secure_url"),
            (String) uploadResult.get("public_id"));

    storeInDB(post);
  }

  private void storeInDB (Post post) {
    postRepo.save(post);
  }
}
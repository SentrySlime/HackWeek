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
import java.util.Map;

@Service
public class PostService {

  @Autowired
  private Cloudinary cloudinary;

  @Autowired
  private PostRepository postRepo;

  public Map uploadImage(CloudPost cloudPost) throws IOException {
    File file = convertToFile(cloudPost.getFile());
    Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
    file.delete();

    mapToPost((String) uploadResult.get("secure_url"), cloudPost);

    return uploadResult;
  }

  private File convertToFile(MultipartFile multipartFile) throws IOException {
    File file = new File(multipartFile.getOriginalFilename());
    try (FileOutputStream fos = new FileOutputStream(file)) {
      fos.write(multipartFile.getBytes());
    }
    return file;
  }

  private void mapToPost (String url, CloudPost cloudPost) {
    Post post = new Post(cloudPost.getTitle(), url);
    storeInDB(post);
  }

  private void storeInDB (Post post) {
    postRepo.save(post);
  }
}
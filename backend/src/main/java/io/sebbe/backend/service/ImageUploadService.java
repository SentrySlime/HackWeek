package io.sebbe.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
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
public class ImageUploadService {

  @Autowired
  private Cloudinary cloudinary;

  @Autowired
  private PostRepository postRepo;

  public Map uploadImage(MultipartFile multipartFile) throws IOException {
    File file = convertToFile(multipartFile);
    Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
    file.delete();

    System.out.println("This is the URL " + (String) uploadResult.get("secure_url"));

    String url = (String) uploadResult.get("secure_url");
    Post post = new Post();
    post.setUrl((String) uploadResult.get("secure_url"));

    postRepo.save(post);


    return uploadResult;
  }

  private File convertToFile(MultipartFile multipartFile) throws IOException {
    File file = new File(multipartFile.getOriginalFilename());
    try (FileOutputStream fos = new FileOutputStream(file)) {
      fos.write(multipartFile.getBytes());
    }
    return file;
  }
}

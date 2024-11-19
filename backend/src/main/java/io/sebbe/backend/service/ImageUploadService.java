package io.sebbe.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
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

  public Map uploadImage(MultipartFile multipartFile) throws IOException {
    File file = convertToFile(multipartFile);
    Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
    file.delete();
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

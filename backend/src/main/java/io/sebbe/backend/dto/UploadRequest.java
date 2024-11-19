package io.sebbe.backend.dto;

import org.springframework.web.multipart.MultipartFile;

public class UploadRequest {
  private String title;
  private MultipartFile image;

  // Getters and Setters
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public MultipartFile getImage() {
    return image;
  }

  public void setImage(MultipartFile image) {
    this.image = image;
  }
}


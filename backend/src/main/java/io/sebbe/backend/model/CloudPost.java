package io.sebbe.backend.model;

import org.springframework.web.multipart.MultipartFile;

public class CloudPost {

  private String title;

  private MultipartFile file;

  public CloudPost(String title, MultipartFile file) {
    this.title = title;
    this.file = file;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public MultipartFile getFile() {
    return file;
  }

  public void setFile(MultipartFile file) {
    this.file = file;
  }
}

package io.sebbe.backend.model;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class CloudPost {

  private String title;
  private MultipartFile file;
  private List<String> categories;

  public CloudPost(String title, MultipartFile file, List<String> categories) {
    this.title = title;
    this.file = file;
    this.categories = categories;
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

  public List<String> getCategories() {
    return categories;
  }

  public void setCategories(List<String> categories) {
    this.categories = categories;
  }

}

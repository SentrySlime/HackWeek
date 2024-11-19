package io.sebbe.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;

  private String url;

  private String img_Id;

  public Post() {
  }

  public Post(String title, String url, String img_Id) {
    this.title = title;
    this.url = url;
    this.img_Id = img_Id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getImg_Id() {
    return img_Id;
  }

  public void setImg_Id(String img_Id) {
    this.img_Id = img_Id;
  }
}
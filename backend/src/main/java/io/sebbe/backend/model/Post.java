package io.sebbe.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String url;
  private String img_Id;

  @ManyToMany
  @JoinTable(
          name = "post_category", // Join table name
          joinColumns = @JoinColumn(name = "post_id"), // Foreign key in the join table for Post
          inverseJoinColumns = @JoinColumn(name = "category_id") // Foreign key in the join table for Category
  )
  private List<Category> categories;

  public Post() {
  }

  public Post(String title, String url, String img_Id) {
    this.title = title;
    this.url = url;
    this.img_Id = img_Id;
  }

  public Post(String title, String url, String img_Id, List<Category> categories) {
    this.title = title;
    this.url = url;
    this.img_Id = img_Id;
    this.categories = categories;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
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

  public List<Category> getCategories() {
    return categories;
  }

  public void setCategories(List<Category> categories) {
    this.categories = categories;
  }
}






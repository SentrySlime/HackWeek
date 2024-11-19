package io.sebbe.backend.controller;

import io.sebbe.backend.service.ImageUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
public class ImageUploadController {

  @Autowired
  private ImageUploadService imageUploadService;

  @PostMapping("/upload")
  public ResponseEntity<Map> uploadImage(@RequestParam("image") MultipartFile file) {
    try {
      Map uploadResult = imageUploadService.uploadImage(file);
      System.out.println(uploadResult);
      return ResponseEntity.ok(uploadResult);
    } catch (IOException e) {
      return ResponseEntity.status(500).body(null);
    }
  }
}
